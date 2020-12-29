import React    from "react";
import template from "./account.jsx";

class Account extends React.Component {
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

export default Account;

