import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const items = [];
class DemoMenu extends Menubar {
  constructor(props) {
    super(props);
  }
}
class TopMenu extends React.Component {
  render() {
    return (
      <DemoMenu
        className="h-12 border-none shadow-md"
        start={<div className="text-2xl font-bold mr-3">Pool Carz</div>}
        end={
          <Button label="Logout" className="p-button-danger p-button-text" />
        }
        model={items}
      />
    );
  }
}

export default TopMenu;
