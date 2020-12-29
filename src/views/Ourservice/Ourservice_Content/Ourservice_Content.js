import React    from "react";
import template from "./Ourservice_Content.jsx";

class Ourservice_Content extends React.Component {
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

export default Ourservice_Content;
