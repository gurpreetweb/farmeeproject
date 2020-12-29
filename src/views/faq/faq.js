import React    from "react";
import template from "./faq.jsx";

class Faq extends React.Component {
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

export default Faq;
