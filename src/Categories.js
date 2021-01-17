import React from "react";
import Header from "./components/Header/Header";

class Categories extends React.Component {
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
        <div>Categories</div>
      </div>
    );
  }
}

export default Categories;
