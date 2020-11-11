import React from "react";
import SearchTextBox from "./components/SearchTextBox";
import PrimaryButton from "./components/PrimaryButton";
import { Checkbox } from "primereact/checkbox";
import UserSelectDropdown from "./components/UserSelectDropdown";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderContacts = this.renderContacts.bind(this);
  }

  renderContacts() {
    return (
      <div className="flex items-center hover:bg-gray-100 text-black p-4">
        <div className="w-1/12">
          <Checkbox onChange={(e) => this.setState({ checked: e.checked })} checked={true}></Checkbox>
        </div>
        <div className="w-6/12">
          <div className="flex items-center">
            <div className="rounded-full w-10 h-10 bg-green-600 text-center text-white flex justify-center items-center">MH</div>
            <div className="flex flex-col items-start ml-3">
              <div className="font-bold">Mike Housten</div>
              <div className="font-thin text-xs">mh@gmail.om</div>
            </div>
          </div>
        </div>
        <div className="w-5/12 font-bold truncate">Amazonia Online Retail</div>
      </div>
    );
  }

  render() {
    return (
      <div className="bg-white h-screen pt-8 px-40">
        <div className="text-2xl font-bold">Contacts</div>
        <div className="flex justify-between mb-10">
          <div className="flex items-center">
            <div>
              <SearchTextBox />
            </div>
            <div className="ml-2">
              <PrimaryButton />
            </div>
          </div>
          <div>
            <UserSelectDropdown />
          </div>
        </div>
        <div className="flex">
          <div style={{ minWidth: "50%" }}>
            <div className="flex flex-col">
              <div className="flex items-center bg-gray-200 text-black p-4">
                <div className="w-1/12">
                  <i className="pi pi-plus"></i>
                </div>
                <div className="w-6/12">Basic Info</div>
                <div className="w-5/12">Company</div>
              </div>
              {this.renderContacts()}
            </div>
          </div>
          <div className="bg-gray-300 h-40 p-8 w-full ml-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
