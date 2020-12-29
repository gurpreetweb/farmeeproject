import React    from "react";
import template from "./Partners_Overview.jsx";

class Partners_Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Overview"
    };
  }
  render() {
    return template.call(this);
  }
}

export default Partners_Overview;
