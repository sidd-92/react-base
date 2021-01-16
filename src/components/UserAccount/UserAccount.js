import React from "react";

class UserAccount extends React.Component {
  render() {
    return (
      <div className="w-6 flex justify-center items-center bg-bg-google mr-3 border border-white">
        {this.props.userFirstLetter}
      </div>
    );
  }
}

export default UserAccount;
