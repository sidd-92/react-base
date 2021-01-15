import React from "react";
import { Card } from "primereact/card";

class AnalyticsCard extends React.Component {
  render() {
    return (
      <Card className="shadow-2xl">
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="font-bold">Income</div>
            <div className="text-xl font-thin mt-2">0</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold">Expenses</div>
            <div className="text-xl font-thin mt-2">0</div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="font-bold">Balance</div>
              <div className="text-xl font-thin mt-2">0</div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default AnalyticsCard;
