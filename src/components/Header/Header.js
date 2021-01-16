import React from "react";
import UserAccount from "../UserAccount/UserAccount";
let HeaderItems = (props) => {
  let activeClassname = props.isActiveLink ? "border-b border-yellow-300" : "";
  return <div className={`mx-2 ${activeClassname}`}>{props.linkName}</div>;
};

class Header extends React.Component {
  render() {
    return (
      <div className="bg-primary-color-900 text-white w-full h-38px flex items-center justify-between">
        <div className="flex items-center">
          <HeaderItems linkName="Expenses" isActiveLink={true} />
          <HeaderItems linkName="Profile" />
          <HeaderItems linkName="Categories" />
        </div>
        <div>
          <UserAccount userFirstLetter="Z" />
        </div>
      </div>
    );
  }
}

export default Header;
