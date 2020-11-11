import { Dropdown } from "primereact/dropdown";
import React from "react";

class UserSelectDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cities: [
        { label: "New York", value: "NY" },
        { label: "Rome", value: "RM" },
        { label: "London", value: "LDN" },
        { label: "Istanbul", value: "IST" },
        { label: "Paris", value: "PRS" },
      ],
    };
  }
  render() {
    return (
      <Dropdown
        value={this.state.city}
        options={this.state.cities}
        onChange={(e) => {
          this.setState({ city: e.value });
        }}
        placeholder="Select a City"
      />
    );
  }
}
export default UserSelectDropdown;
