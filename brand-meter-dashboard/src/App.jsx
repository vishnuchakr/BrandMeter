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

class App extends React.Component {
  render() {
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
          <div className="metric-card1">
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
          <div className="metric-card2">
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
                Compares the percentage of detractors (thos who would not
                recommend a brand) to promoters (those who would recommend a
                brand.)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
