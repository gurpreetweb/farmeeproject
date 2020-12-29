import React    from "react";
import template from "./privacypolicy.jsx";

class privacypolicy extends React.Component {
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

export default privacypolicy;
