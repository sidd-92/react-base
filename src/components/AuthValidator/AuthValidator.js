import React, { Component } from "react";
import AuthService from "../../services/AuthService";

class AuthValidator extends Component {
  constructor(props) {
    super(props);
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    let c = AuthService.getUserInfo();
    //TODO IMPLEMENT VALIDATION LOGIC HERE.
    if (AuthService.getUserInfo()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.isValid()) {
      return <this.props.authorizedcomponent {...this.props} />;
    } else {
      this.props.history.push("/login");
      return <div></div>;
    }
  }
}

export default AuthValidator;
