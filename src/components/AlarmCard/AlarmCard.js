import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const footer = (
  <span>
    <Button label="Save" icon="pi pi-check" style={{ marginRight: ".25em" }} />
    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
  </span>
);

class AlarmCard extends React.Component {
  render() {
    return (
      <div>
        <Card
          title={this.props.title}
          subTitle={this.props.subTitle}
          footer={footer}
        >
          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default AlarmCard;
