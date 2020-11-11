import React from "react";
import SearchTextBox from "./components/SearchTextBox";
import PrimaryButton from "./components/PrimaryButton";
import UserSelectDropdown from "./components/UserSelectDropdown";

class App extends React.Component {
  render() {
    return (
      <div className="bg-white h-screen p-4">
        <div className="text-2xl font-bold">Contacts</div>
        <div className="flex justify-between">
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
      </div>
    );
  }
}

export default App;
