import React from "react";
import SearchTextBox from "./components/SearchTextBox";
import PrimaryButton from "./components/PrimaryButton";
import { Checkbox } from "primereact/checkbox";
import UserSelectDropdown from "./components/UserSelectDropdown";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dialogVisible: false };
  }

  render() {
    return (
      <React.Fragment>
        <FullScreenDialog
          dialogVisible={this.state.dialogVisible}
          hideDialogHandler={() => this.setState({ dialogVisible: false })}
        ></FullScreenDialog>
        <div className="m-1">
          <div className="font-bold text-3xl">Expense App</div>
          <div className="w-full">
            <Card>Content</Card>
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
