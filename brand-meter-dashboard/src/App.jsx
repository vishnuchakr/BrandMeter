import logo from "./logo.svg";
import "./App.css";
import Metrics from "./components/Metrics";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sentimentStatus: false,
      channelStatus: false,
      leadsStatus: true,
      sovStatus: true,
      mentionsStatus: true,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header"></div>
        <div className="middle"></div>
        <div className="footer">
          <Metrics status="0" />
          <Metrics status="1" />
          <Metrics status="1" />
          <Metrics status="0" />
          <Metrics status="0" />
        </div>
      </div>
    );
  }
}

export default App;
