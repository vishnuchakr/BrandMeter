import logo from "./logo.svg";
import "./App.css";
import Metrics from "./components/Metrics";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sentimentStatus: false,
      channelEngagement: false,
      newCustomerLeads: true,
      shareOfVoice: true,
      mentions: true,
    };
  }

  render() {
    return (
      <div className="App">
        <p>hi</p>
        <div className="row">
          <Metrics status={this.sentimentStatus} />
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
        </div>
      </div>
    );
  }
}

export default App;
