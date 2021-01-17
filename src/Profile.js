import React from "react";
import Header from "./components/Header/Header";

class Profile extends React.Component {
  componentDidMount() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.profile) {
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <Header history={this.props.location} />
        <div>Profile</div>
      </div>
    );
  }
}

export default Profile;
