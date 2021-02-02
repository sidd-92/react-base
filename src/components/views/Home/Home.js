import React from "react";
import TopMenu from "../../TopMenu/TopMenu";
import CustomCard from "../../CustomCard/CustomCard";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      showAllRides: false,
      products: [
        {
          id: "1000",
          code: "f230fh0g3",
          start: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          end: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          seats: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="w-full">
        <TopMenu history={this.props.history} location={this.props.location} />
        <CustomCard
          title="Book a Ride"
          subTitle="Pool Carz is an online application which enables user to share rides with others. You can either book a ride or offer a ride."
        >
          <div className="flex flex-col items-center">
            <Button
              onClick={() =>
                this.setState({ showAllRides: !this.state.showAllRides })
              }
              label="Show All Rides"
              className="bg-teal-600 border-none shadow-md w-full sm:w-3/12 mb-2"
            />
            {this.state.showAllRides ? (
              <div className="mt-4 mb-10">
                <div className="flex items-center justify-center">
                  <div className="mr-2">
                    <Button
                      label="To Office"
                      className="bg-transparent border border-textOnNav text-gray-900 shadow-md mb-6"
                    />
                  </div>
                  <div className="mr-2">
                    <Button
                      label="From Office"
                      className="bg-transparent border border-textOnNav text-gray-900 shadow-md mb-6"
                    />
                  </div>
                  <div>
                    <Button
                      label="Others"
                      className="bg-transparent border border-textOnNav text-gray-900 shadow-md mb-6"
                    />
                  </div>
                </div>
                <DataTable value={this.state.products}>
                  <Column field="start" header="Start Point"></Column>
                  <Column field="end" header="End Point"></Column>
                  <Column field="seats" header="Seats Available"></Column>
                </DataTable>
              </div>
            ) : (
              ""
            )}
            <Button
              label="Offer A Ride"
              className="bg-buttonGradient4 border-none shadow-md w-full sm:w-3/12"
            />
          </div>
        </CustomCard>
      </div>
    );
  }
}

export default Home;
