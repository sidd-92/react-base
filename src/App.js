import React from "react";
import { Button } from "primereact/button";
import AnalyticsCard from "./components/AnalyticsCard/AnalyticsCard";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dialogVisible: false, todayDate: new Date().toDateString() };
  }

  render() {
    return (
      <React.Fragment>
        <FullScreenDialog
          dialogVisible={this.state.dialogVisible}
          hideDialogHandler={() => this.setState({ dialogVisible: false })}
        ></FullScreenDialog>
        <div className="m-1">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">Overview</div>
            <div className="text-sm">{this.state.todayDate}</div>
          </div>
          <div className="w-full mt-2">
            <AnalyticsCard />
          </div>
          <div className="fixed bottom-0 right-0 m-4">
            <Button
              icon="pi pi-plus"
              label="Add"
              onClick={() => this.setState({ dialogVisible: true })}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
