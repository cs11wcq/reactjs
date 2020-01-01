import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

//214

function helo() {
  return 'hello';
}
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

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    }
    else
    {
      this.props.signOut();
    }
  };

  handleOnClickSignIn=() => {
    this.auth.signIn();
  };
  handleOnClickSignOut = () => {
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
    else
    {
      return (
          <button className = "ui red google button"
                  onClick={() => {this.handleOnClickSignIn()}}>
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
  return {isSignedInProp: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut
})(GoogleAuth);
