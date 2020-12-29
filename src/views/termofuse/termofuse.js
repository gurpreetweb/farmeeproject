import React    from "react";
import template from "./termofuse.jsx";

class termofuse extends React.Component {
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

export default termofuse;
