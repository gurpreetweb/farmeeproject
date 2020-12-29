import React    from "react";
import template from "./University_Overview.jsx";

class University_Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "overview"
    };
  }
  render() {
    
    return template.call(this);
  }
}

export default University_Overview;
