import { Card } from "primereact/card";
import React from "react";

class CustomCard extends React.Component {
  render() {
    let { title, subTitle } = this.props;
    return (
      <div className="my-2">
        <Card
          className="shadow-md bg-yellow-100  text-navbar"
          title={title}
          subTitle={subTitle}
        >
          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default CustomCard;
