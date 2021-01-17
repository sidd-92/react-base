import React from "react";
import SocialLogin from "react-social-login";

class SocialLoginButton extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.triggerLogin}
        {...this.props}
        className="w-full flex items-center justify-center"
      >
        {this.props.children}
      </div>
    );
  }
}

export default SocialLogin(SocialLoginButton);
