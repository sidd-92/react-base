import React from "react";
import SearchTextBox from "./components/SearchTextBox";

class App extends React.Component {
  render() {
    return (
      <div className="bg-white h-screen p-4">
        <div className="text-2xl font-bold">Contacts</div>
        <SearchTextBox />
      </div>
    );
  }
}

export default App;
