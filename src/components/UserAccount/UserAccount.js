import React from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.logoutRef = React.createRef();
  }
  render() {
    return (
      <React.Fragment>
        <OverlayPanel ref={this.logoutRef}>
          <div className="text-red-300">Logout</div>
        </OverlayPanel>
        <Button
          label={this.props.userFirstLetter}
          onClick={(e) => this.logoutRef.current.toggle(e)}
          className="h-6 flex justify-center items-center bg-bg-google mr-3 border-none text-white"
        ></Button>
      </React.Fragment>
    );
  }
}

export default UserAccount;
