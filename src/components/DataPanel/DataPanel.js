import React from "react";
import { Panel } from "primereact/panel";

class DataPanel extends React.Component {
  render() {
    return (
      <Panel
        header={this.props.header}
        className="my-2"
        toggleable
        collapsed={this.props.collapsePanel}
        onToggle={(e) => this.props.handleToggle(e.value)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Panel>
    );
  }
}

export default DataPanel;
