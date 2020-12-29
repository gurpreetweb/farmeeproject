import React    from "react";
import template from "./legal.jsx";

class legal extends React.Component {
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

export default legal;
