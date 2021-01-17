import React from "react";
import { NavLink } from "react-router-dom";

import UserAccount from "../UserAccount/UserAccount";
let HeaderItems = (props) => {
  let activeClassname = props.isActiveLink ? "border-b border-yellow-300" : "";
  return (
    <NavLink to={props.toLink}>
      <div className={`mx-2 ${activeClassname}`}>{props.linkName}</div>
    </NavLink>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Z",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("userInfo")) {
      let profile = JSON.parse(localStorage.getItem("userInfo")).profile;
      let fn = profile["firstName"].split("");
      this.setState({ firstName: fn[0] });
    }
  }
  render() {
    console.log("Hstory Props", this.props.history.pathname);
    return (
      <div className="bg-primary-color-900 text-white w-full h-38px flex items-center justify-between">
        <div className="flex items-center">
          <HeaderItems
            toLink={"/"}
            linkName="Expenses"
            isActiveLink={this.props.history.pathname === "/"}
          />
          <HeaderItems
            toLink={"/profile"}
            linkName="Profile"
            isActiveLink={this.props.history.pathname === "/profile"}
          />
          <HeaderItems
            toLink={"/categories"}
            linkName="Categories"
            isActiveLink={this.props.history.pathname === "/categories"}
          />
          <HeaderItems toLink={"/login"} linkName="Login" />
        </div>
        <div>
          <UserAccount userFirstLetter={this.state.firstName} />
        </div>
      </div>
    );
  }
}

export default Header;
