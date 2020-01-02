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
        console.log('COMPONENT DID MOUNT');
        this.onAuthChange(this.auth.isSignedIn.get());
        //put a listener on when the status of the sign in changes
        //if the status changes, then call onAuthChange callback
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
      //#224
      this.props.signIn(this.auth.currentUser.get().getId());
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
    console.log('renderAuthButton ', this.props.isSignedInProp);
    const {isSignedInProp}=this.props;
    if (isSignedInProp === null) {
      console.log('return null');
      return null;
    }
    else if (isSignedInProp) {
      console.log('renderAuthButton show SIGN OUT button');

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
      console.log('renderAuthButton show SIGN IN button');
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
    console.log("RENDER")
    return <div>
      {this.renderAuthButton()}
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps',state);
  console.log('mapStateToProps', state.auth.isSignedIn);
  return {isSignedInProp: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut
})(GoogleAuth);
