
import React from "react";
import template from "./career.jsx";

class career extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive1: true,
      isActive2: false,
      isActive3: false
    };
  }
  render() {
    return template.call(this);
  }
}

export default career;



