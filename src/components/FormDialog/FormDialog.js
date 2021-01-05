import React from "react";
import { Dialog } from "primereact/dialog";
class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderFooter() {
    return <div>Footer</div>;
  }

  renderHeader() {
    return <div className="font-bold text-2xl">Set Your Alarm</div>;
  }

  render() {
    return (
      <Dialog
        maximized={true}
        header={this.renderHeader()}
        visible={this.props.isVisible}
        style={{ width: "50vw" }}
        footer={this.renderFooter()}
        onHide={this.props.onHide}
      >
        {this.props.children}
      </Dialog>
    );
  }
}

export default FormDialog;
