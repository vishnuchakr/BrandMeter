import React from "react";
import "./Metrics.css";

class Metrics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="metric"
        style={{ border: this.props.sentimentStatus ? "red" : "green" }}
      ></div>
    );
  }
}

export default Metrics;
