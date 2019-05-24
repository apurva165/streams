import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
  //  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({clientId: "267231408253-2paoellq3a3t2negpb9182srt3anlp4f.apps.googleusercontent.com", scope: "email"}).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
        //  this.authorization = window.gapi.auth2.getAuthInstance();
      });
    });
  }

  onAuthChange = isSignedIn => {
    console.log({isSignedin: this.auth.currentUser});
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get.getId);
      console.log({userID: this.auth.currentUser.get.getId});
    } else {
      this.props.signOut();
    }
    //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (<button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon"/>
        SignOut
      </button>);
    } else if (this.props.isSignedIn === false) {
      return (<button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon"/>
        SignIn with Google
      </button>);
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  console.log({googleAuthState: state});
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
