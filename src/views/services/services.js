import React    from "react";
import template from "./services.jsx";

class services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "overview"
    };
  }
  render() {
    
    return (template(this.props));
  }
}

export default services;
