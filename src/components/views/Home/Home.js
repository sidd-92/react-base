import React from "react";
import TopMenu from "../../TopMenu/TopMenu";
import CustomCard from "../../CustomCard/CustomCard";
import { Button } from "primereact/button";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
    };
  }

  render() {
    return (
      <div className="container mx-auto">
        <TopMenu history={this.props.history} location={this.props.location} />
        <CustomCard
          title="Book a Ride"
          subTitle="Pool Carz is an online application which enables user to share rides with others. You can either book a ride or offer a ride."
        >
          <div className="flex flex-col items-center">
            <Button
              label="Show All Rides"
              className="p-button-raised p-button-help w-full sm:w-3/12 mb-2"
            />
            <Button
              label="Offer A Ride"
              className="p-button-raised p-button-success w-full sm:w-3/12"
            />
          </div>
        </CustomCard>
      </div>
    );
  }
}

export default Home;
