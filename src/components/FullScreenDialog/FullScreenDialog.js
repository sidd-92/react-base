import React from "react";
import { Sidebar } from "primereact/sidebar";

class FullScreenDialog extends React.Component {
  render() {
    return (
      <div>
        <Sidebar
          fullScreen
          visible={this.props.dialogVisible}
          onHide={this.props.hideDialogHandler}
        >
          <div>Add Your Expense</div>
        </Sidebar>
      </div>
    );
  }
}

export default FullScreenDialog;
