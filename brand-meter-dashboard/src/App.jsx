import "./App.css";
import React from "react";
import sbux from "./assets/sbux.png";
import { Icon, InlineIcon } from "@iconify/react";
import twitterIcon from "@iconify/icons-et/twitter";
import peopleDialogue from "@iconify/icons-openmoji/people-dialogue";
import voiceActivate from "@iconify/icons-carbon/voice-activate";
import moneyIcon from "@iconify/icons-cil/money";
import bellOutlineBadged from "@iconify/icons-clarity/bell-outline-badged";
import globalIcon from "@iconify/icons-si-glyph/global";
import Meter from "./Meter";
import SocialMedia from "./SocialMedia";
import TableauReport from "tableau-react-embed";
import Button from "react-bootstrap/Button";

const options = {
  height: 800,
  width: 1000,
  hideTabs: true,
  hideToolbar: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homepage: true,
      page1: false,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleClick1() {
    this.setState({ page1: true });
    this.setState({ homepage: false });
  }
  handleClick2() {
    this.setState({ page2: true });
    this.setState({ homepage: false });
  }
  handleClick3() {
    this.setState({ page3: true });
    this.setState({ homepage: false });
  }
  handleClick4() {
    this.setState({ page4: true });
    this.setState({ homepage: false });
  }
  handleClick5() {
    this.setState({ page5: true });
    this.setState({ homepage: false });
  }

  handleBackClick() {
    if (this.state.page1) {
      this.setState({ page1: false });
    } else if (this.state.page2) {
      this.setState({ page2: false });
    } else if (this.state.page3) {
      this.setState({ page3: false });
    } else if (this.state.page4) {
      this.setState({ page4: false });
    } else if (this.state.page5) {
      this.setState({ page5: false });
    }
    this.setState({ homepage: true });
  }

  render() {
    if (this.state.homepage) {
      return (
        <div className="App">
          <div className="header">
            <img src={sbux} alt="sbux"></img>
            <p className="title">BrandMeter Dashboard</p>
          </div>
          <div className="main">
            <Meter />
          </div>
          <div className="footer">
            <div className="metric-card1" onClick={this.handleClick1}>
              <div className="rating-good">
                <p className="rating-text">EXCELLENT</p>
                <Icon
                  icon={twitterIcon}
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
                <p className="score">+5</p>
                <p className="card-name" style={{ left: "85px" }}>
                  Social Media Sentiment
                </p>
                <p className="card-description" style={{ left: "85px" }}>
                  Degree of customer positivity/negativity towards your brand on
                  social media platforms.
                </p>
              </div>
            </div>
            <div className="metric-card2" onClick={this.handleClick2}>
              <div className="rating-bad">
                <p className="rating-text">POOR</p>
                <Icon
                  icon={globalIcon}
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
                <p className="score">15%</p>
                <p className="card-name" style={{ left: "365px" }}>
                  Global Engagement
                </p>
                <p className="card-description" style={{ left: "365px" }}>
                  Level of consumer engagement with your brand and percentage of
                  consumers interacted with across the world.
                </p>
              </div>
            </div>
            <div className="metric-card3">
              <div className="rating-bad">
                <p className="rating-text">POOR</p>
                <Icon
                  icon={voiceActivate}
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
                <p className="score">-16</p>
                <p className="card-name" style={{ left: "650px" }}>
                  Net Customer Trust
                </p>
                <p className="card-description" style={{ left: "650px" }}>
                  A score that measures how trustworthy your customers find your
                  products and brand.
                </p>
              </div>
            </div>
            <div className="metric-card4">
              <div className="rating-good">
                <p className="rating-text">FAIR</p>
                <Icon
                  icon={moneyIcon}
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
                <p className="score">$25</p>
                <p className="card-name" style={{ left: "925px" }}>
                  Customer Lifetime Value{" "}
                </p>
                <p className="card-description" style={{ left: "925px" }}>
                  The average total expenditure of a customer over the complete
                  course of their interactions with your brand.
                </p>
              </div>
            </div>
            <div className="metric-card5">
              <div className="rating-good">
                <p className="rating-text">EXCELLENT</p>
                <Icon
                  icon={bellOutlineBadged}
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
                <p className="score">+83</p>
                <p className="card-name" style={{ left: "1210px" }}>
                  Net Promoter Score
                </p>
                <p className="card-description" style={{ left: "1210px" }}>
                  Compares the percentage of detractors (those who would not
                  recommend a brand) to promoters (those who would recommend a
                  brand.)
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page1) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button variant="primary" onClick={this.handleBackClick}>
            Back
          </Button>{" "}
          <TableauReport
            url="https://public.tableau.com/views/SocialMediaDashboard_16185394756440/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
            options={options}
          />
        </div>
      );
    } else if (this.state.page2) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button variant="primary" onClick={this.handleBackClick}>
            Back
          </Button>{" "}
          <TableauReport
            url="https://public.tableau.com/views/prootypt/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
            options={options}
          />
        </div>
      );
    }
  }
}

export default App;
