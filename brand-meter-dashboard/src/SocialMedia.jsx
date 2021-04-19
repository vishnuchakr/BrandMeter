import React from "react";
import TableauReport from "tableau-react-embed";
import Button from "react-bootstrap/Button";

const options = {
  height: 900,
  width: 1000,
  hideTabs: true,
  hideToolbar: true,
};

class SocialMedia extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <TableauReport
          url="https://public.tableau.com/views/prootypt/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
          options={options}
        />
        <Button variant="primary" onClick>
          Primary
        </Button>{" "}
      </div>
    );
  }
}

export default SocialMedia;
