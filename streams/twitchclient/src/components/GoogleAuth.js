import React from 'react';

//214

function helo() {
  return 'hello';
}
class GoogleAuth extends React.Component {
  state = {isSignedIn: null};

  componentDidMount() {
    //the following just initializes Google's API library with the OAuth clientID
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '950506296974-n0fijur69uraofpnk9d1nelafci1j8iu.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance(); //get auth object

        this.setState({isSignedIn: this.auth.isSignedIn.get()}) //check if signed in
      })
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>
    }
    else if (this.state.isSignedIn) {
      return <div> I am signed in </div>
    }
    else
    {
      return <div> I am not signed in</div>
    }
  }
  render() {
    return <div>
      {this.renderAuthButton()}
    </div>
  }
}

export default GoogleAuth;
