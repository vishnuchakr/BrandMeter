import React from "react";
import "./Metrics.css";

class Metrics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.status);
    return (
      <div
        className="metric"
        style={{
          borderStyle: "solid",
          borderColor: this.props.status === "0" ? "red" : "green",
        }}
      ></div>
    );
  }
}

export default Metrics;
