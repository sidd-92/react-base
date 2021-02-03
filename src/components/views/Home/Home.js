import React from "react";
import TopMenu from "../../TopMenu/TopMenu";
import CustomCard from "../../CustomCard/CustomCard";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Column } from "primereact/column";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      showAllRides: false,
      endPlaces: [],
      startPlaces: [],
      filter: { endPoints: {}, startPoints: {} },
      selectedRide: null,
      filteredRides: [],
      rides: [
        {
          id: 1,
          start: "Carpenter",
          end: "Clemons",
          seats: 4,
        },
        {
          id: 2,
          start: "Little Fleur",
          end: "Jana",
          seats: 12,
        },
        {
          id: 3,
          start: "Boyd",
          end: "Warner",
          seats: 29,
        },
        {
          id: 4,
          start: "Little Fleur",
          end: "Hooker",
          seats: 31,
        },
        {
          id: 5,
          start: "Debra",
          end: "Forster",
          seats: 14,
        },
        {
          id: 6,
          start: "Arapahoe",
          end: "Ryan",
          seats: 74,
        },
        {
          id: 7,
          start: "Canary",
          end: "Thackeray",
          seats: 9,
        },
        {
          id: 8,
          start: "Pearson",
          end: "Lindbergh",
          seats: 9,
        },
        {
          id: 9,
          start: "Waywood",
          end: "Forest",
          seats: 34,
        },
        {
          id: 10,
          start: "Rusk",
          end: "Riverside",
          seats: 94,
        },
        {
          id: 11,
          start: "Kings",
          end: "Dahle",
          seats: 39,
        },
        {
          id: 12,
          start: "Eagle Crest",
          end: "Mallory",
          seats: 21,
        },
        {
          id: 13,
          start: "South",
          end: "Boyd",
          seats: 86,
        },
        {
          id: 14,
          start: "Arkansas",
          end: "Vera",
          seats: 62,
        },
        {
          id: 15,
          start: "Scott",
          end: "Lakewood Gardens",
          seats: 40,
        },
        {
          id: 16,
          start: "Homewood",
          end: "Butterfield",
          seats: 91,
        },
        {
          id: 17,
          start: "Portage",
          end: "Clove",
          seats: 34,
        },
        {
          id: 18,
          start: "Randy",
          end: "Bellgrove",
          seats: 22,
        },
        {
          id: 19,
          start: "Drewry",
          end: "Bultman",
          seats: 41,
        },
        {
          id: 20,
          start: "Bunting",
          end: "Clyde Gallagher",
          seats: 14,
        },
        {
          id: 21,
          start: "Bunting",
          end: "Clyde Gallagher",
          seats: 14,
        },
      ],
    };
  }

  componentDidMount() {
    let obj = {};
    let obj2 = {};
    let allStart = [];
    let allEnds = [];
    this.state.rides.map((item) => {
      if (item.end in obj) {
      } else {
        obj[item.end] = item;
        allEnds.push(item.end);
      }
    });
    this.state.rides.map((item) => {
      if (item.start in obj2) {
      } else {
        obj2[item.start] = item;
        allStart.push(item.start);
      }
    });
    this.setState({
      startPlaces: allStart,
      endPlaces: allEnds,
    });
  }

  renderAllEndFilter = () => {
    return (
      <div className="flex-col sm:flex-row flex items-center justify-between bg-gray-100 px-2">
        <div className="mb-6 sm:mb-0 flex flex-row sm:flex-col items-center">
          <div>To</div>
          {this.state.filter.endPoints &&
            Object.keys(this.state.filter.endPoints).length > 0 && (
              <div
                onClick={() => {
                  this.setState({
                    filter: { ...this.state.filter, endPoints: {} },
                  });
                }}
                className="ml-2 sm:ml-0 text-xs underline text-blue-500 cursor-pointer"
              >
                Clear All
              </div>
            )}
        </div>
        <div className="flex items-center justify-between sm:justify-start flex-wrap w-11/12 xxxl:w-auto">
          {this.state.endPlaces.length > 0 &&
            this.state.endPlaces.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  let filter = this.state.filter;
                  if (item in filter.endPoints) {
                    delete filter.endPoints[item];
                  } else {
                    filter.endPoints[item] = true;
                  }
                  console.log("filter", filter);
                  this.setState({ filter });
                }}
                className={`${
                  this.state.filter.endPoints &&
                  this.state.filter.endPoints[item]
                    ? " bg-blue-500 text-gray-100 "
                    : " bg-yellow-400 hover:bg-yellow-200 "
                } m-2 text-sm transition duration-300 cursor-pointer p-1 rounded-full`}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    );
  };

  renderAllStartFilter = () => {
    return (
      <div className="flex-col sm:flex-row flex items-center justify-between bg-gray-100 px-2 border-b border-gray-200">
        <div className="mb-6 sm:mb-0 flex flex-row sm:flex-col items-center">
          <div>From</div>
          {this.state.filter.startPoints &&
            Object.keys(this.state.filter.startPoints).length > 0 && (
              <div
                onClick={() => {
                  this.setState({
                    filteredRides: [],
                    filter: { ...this.state.filter, startPoints: {} },
                  });
                }}
                className="ml-2 sm:ml-0 text-xs underline text-blue-500 cursor-pointer"
              >
                Clear All
              </div>
            )}
        </div>
        <div className="flex items-center justify-between sm:justify-start flex-wrap w-11/12 xxxl:w-auto">
          {this.state.startPlaces.length > 0 &&
            this.state.startPlaces.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  let filter = this.state.filter;
                  if (item in filter.startPoints) {
                    delete filter.startPoints[item];
                    this.setState({ filteredRides: [] });
                  } else {
                    filter.startPoints[item] = true;
                  }
                  let filteredArray = this.state.rides.filter((startItem) => {
                    if (startItem.start == item) {
                      return startItem.start;
                    }
                  });
                  console.log("filter", filteredArray);
                  this.setState({
                    filter,
                    filteredRides: [
                      ...this.state.filteredRides,
                      ...filteredArray,
                    ],
                  });
                }}
                className={`${
                  this.state.filter.startPoints &&
                  this.state.filter.startPoints[item]
                    ? " bg-blue-500 text-gray-100 "
                    : " bg-yellow-400 hover:bg-yellow-200 "
                } m-2 text-sm transition duration-300 cursor-pointer p-1 rounded-full`}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    );
  };

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
                <div className="my-2">
                  <Accordion>
                    <AccordionTab header="Filters">
                      <div className="flex flex-col justify-start">
                        {this.renderAllStartFilter()}
                        {this.renderAllEndFilter()}
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
                <div>
                  <DataTable
                    selection={this.state.selectedRide}
                    onSelectionChange={(e) =>
                      this.setState({ selectedRide: e.value })
                    }
                    selectionMode="single"
                    dataKey="id"
                    className="w-full"
                    value={
                      ((this.state.filter.startPoints ||
                        this.state.filter.endPoints) &&
                        Object.keys(this.state.filter.startPoints).length >
                          0) ||
                      Object.keys(this.state.filter.endPoints).length > 0
                        ? this.state.filteredRides
                        : this.state.rides
                    }
                    paginator
                    rows={5}
                  >
                    <Column field="start" header="Start Point / From"></Column>
                    <Column field="end" header="End Point / To"></Column>
                    <Column field="seats" header="Seats Available"></Column>
                  </DataTable>
                </div>
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
