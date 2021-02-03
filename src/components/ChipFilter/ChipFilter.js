import React from "react";

class ChipFilter extends React.Component {
  render() {
    return (
      <div
        key={index}
        onClick={() => {
          let filter = this.state.filter;
          if (item in filter.endPoints) {
            filter.endPoints[item] = false;
          } else {
            filter.endPoints[item] = true;
          }
          console.log("filter", filter);
          this.setState({ filter });
        }}
        className={`${
          this.state.filter.endPoints && this.state.filter.endPoints[item]
            ? " bg-blue-500 text-gray-100 "
            : " bg-yellow-400 hover:bg-yellow-200 "
        } m-2 text-sm transition duration-300 cursor-pointer p-1 rounded-full`}
      >
        {item}
      </div>
    );
  }
}

export default ChipFilter;
