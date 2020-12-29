import React from "react";
import template from "./About_Block_2.jsx";

class About_Block_2 extends React.Component {
  openOurService = (param) => e => {
    if (param === "Student") {
      localStorage.setItem("showHideDemo1", "true");
      localStorage.setItem("showHideDemo2", "false");
      localStorage.setItem("showHideDemo3", "false");
      window.location = "/#/ourservice";
    }
    if (param === "Agent") {
      localStorage.setItem("showHideDemo2", "true");
      localStorage.setItem("showHideDemo1", "false");
      localStorage.setItem("showHideDemo3", "false");
      window.location = "/#/ourservice";
    }
    if (param === "University") {
      localStorage.setItem("showHideDemo3", "true");
      localStorage.setItem("showHideDemo1", "false");
      localStorage.setItem("showHideDemo2", "false");
      window.location = "/#/ourservice";
    }
  };
  render() {
    return template.call(this);
  }
}

export default About_Block_2;
