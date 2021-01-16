import React from "react";
import Header from "./components/Header/Header";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header history={this.props.location} />
        <div>Categories</div>
      </div>
    );
  }
}

export default Profile;
