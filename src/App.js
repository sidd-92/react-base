import React from "react";
import AlarmCard from "./components/AlarmCard/AlarmCard";
import { Button } from "primereact/button";
import FormDialog from "./components/FormDialog/FormDialog";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDialogVisible: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <FormDialog
          isVisible={this.state.isFormDialogVisible}
          onHide={() => this.setState({ isFormDialogVisible: false })}
        >
          <div className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </FormDialog>
        <div className="font-bold text-4xl text-center">React Alarm</div>
        <div className="w-full flex justify-center">
          <Button
            onClick={() => this.setState({ isFormDialogVisible: true })}
            label="Add Alarm"
            className="p-button-raised p-button-rounded"
          />
        </div>
        <div style={{ height: "600px" }} className="overflow-scroll mx-1">
          <AlarmCard title="Alarm 1">
            <div>Hello</div>
          </AlarmCard>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
