import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { linkLogin } from "../../routes";

const items = [
  {
    label: "Home",
  },
];
class DemoMenu extends Menubar {
  constructor(props) {
    super(props);
  }
}

class TopMenu extends React.Component {
  render() {
    return (
      <DemoMenu
        className="h-12 border-none shadow-md bg-yellow-500 text-navbar"
        start={
          <div className="text-2xl font-bold mr-3 cursor-pointer ">
            Pool Carz
          </div>
        }
        end={
          <Button
            onClick={() => {
              localStorage.clear();
              this.props.history.push(linkLogin);
            }}
            label="Logout"
            className="p-button-danger border-none text-gray-700"
          />
        }
        model={items}
      />
    );
  }
}

export default TopMenu;
