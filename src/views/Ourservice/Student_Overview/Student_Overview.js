import React    from "react";
import template from "./Student_Overview.jsx";

class Student_Overview extends React.Component {
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

export default Student_Overview;
