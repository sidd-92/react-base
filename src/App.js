import React from "react";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { Calendar } from "primereact/calendar";
import AnalyticsCard from "./components/AnalyticsCard/AnalyticsCard";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";
import DataPanel from "./components/DataPanel/DataPanel";
import Header from "./components/Header/Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.filter = React.createRef();
    this.state = {
      dialogVisible: false,
      todayDate: new Date().toDateString(),
      collapsePanel: false,
      collapsePanel1: false,
      collapsePanel2: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <OverlayPanel
          showCloseIcon
          dismissable
          ref={this.filter}
          style={{ width: "auto" }}
        >
          <div>
            <div className="text-xl">Title</div>
            <div>
              <Calendar inline value={new Date()}></Calendar>
            </div>
          </div>
        </OverlayPanel>
        <FullScreenDialog
          dialogVisible={this.state.dialogVisible}
          hideDialogHandler={() => this.setState({ dialogVisible: false })}
        ></FullScreenDialog>
        <Header />
        <div className="m-1">
          <div className="font-bold text-2xl">Overview</div>
          <div className="w-full mt-1">
            <AnalyticsCard />
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="font-thin text-md">Your Transactions</div>
            <div className="flex items-center text-sm hover:underline hover:text-yellow-400">
              <div onClick={(e) => this.filter.current.toggle(e)}>
                {this.state.todayDate}
              </div>
              <div className="mt-1">
                <i className="pi pi-angle-down"></i>
              </div>
            </div>
          </div>

          <div
            style={{ height: "400px" }}
            className="overflow-scroll text-justify pb-10"
          >
            <DataPanel
              header="Title 1"
              collapsePanel={this.state.collapsePanel}
              handleToggle={(val) => this.setState({ collapsePanel: val })}
            />
            <DataPanel
              header="Title 2"
              collapsePanel={this.state.collapsePanel1}
              handleToggle={(val) => this.setState({ collapsePanel1: val })}
            />
            <DataPanel
              header="Title 3"
              collapsePanel={this.state.collapsePanel2}
              handleToggle={(val) => this.setState({ collapsePanel2: val })}
            />
          </div>
          <div className="w-full fixed bottom-0 right-0">
            <Button
              className="w-full"
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
