import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

//214
class GoogleAuth extends React.Component {

  componentDidMount() {
    //the following just initializes Google's API library with the OAuth clientID
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '950506296974-n0fijur69uraofpnk9d1nelafci1j8iu.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance(); //get auth object
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }
  //google knows when there is a change,
  //and notified me (this component)
  // whether the user is signed in or not
  //by alerting the call back function onAuthChange
  onAuthChange = (isSignedIn) => {
    console.log('listener is responding')
    if (isSignedIn) {
      this.props.signIn();
    }
    else
    {
      this.props.signOut();
    }
  };

  handleOnClickSignInShowLoginPrompt=() => {
    //this just calls the pop up to sign in
    console.log('handleOnClickSignInShowLoginPrompt');
    this.auth.signIn();
  };
  handleOnClickSignOut = () => {
    console.log('handleOnClickSignOut')
    this.auth.signOut();
  };
  renderAuthButton() {
    const {isSignedInProp}=this.props;
    if (isSignedInProp === null) {
      return null;
    }
    else if (isSignedInProp) {
      return (
          <button className = "ui red google button"
                  onClick = {this.handleOnClickSignOut}
          >
            <i className="google icon" />
            Sign Out
          </button>
      )
    }
    //not signed in
    else
    {
      return (
          <button className = "ui red google button"
                  onClick={() => {this.handleOnClickSignInShowLoginPrompt()}}>
            <i className="google icon" />
            Sign In With GOOGLE
          </button>
      )
    }
  }
  render() {
    return <div>
      {this.renderAuthButton()}
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps',state.auth.isSignedIn);
  return {isSignedInProp: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut
})(GoogleAuth);
