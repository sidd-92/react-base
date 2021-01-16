import React from "react";
import Header from "./components/Header/Header";

class Profile extends React.Component {
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
