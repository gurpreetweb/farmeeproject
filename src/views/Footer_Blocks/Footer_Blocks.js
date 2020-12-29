import React from "react";
import { Link, Redirect } from 'react-router-dom';
import template from "./Footer_Blocks.jsx";
import axios from 'axios';
import config from "../../config.json";
var baseurl = `${config.baseurl}`;
var baseurl1 = `${config.baseurl}/`;

class Footer_Blocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      for_student: [],
      for_pp: [],
      about: [],
      for_university: [],
      help_center: [],
      contact: [],
      email: ""
    };
    axios.get(baseurl + "/getAllCmsData").then((response) => {
      this.setState(
        {
          for_student: response.data.for_student,
          for_pp: response.data.for_pp,
          about: response.data.about,
          for_university: response.data.for_university,
          help_center: response.data.help_center,
          contact: response.data.contact,
        });
    });
  }
  handleClick = param1 => e => {
    localStorage.setItem("cms_id", param1);
    window.location.href = "/#/Cmsdetail";
    window.location.reload()
    window.scrollTo(0, 0);
    /*
    this.props.history.push({
   pathname: '/Cmsdetail',
   data: param1 // your data array of objects
 })
 */
  }
  handleSubmit = (email) => {
    this.setState({ ...this.state, email: "" })
    axios.post(baseurl + "/newsletter", {
      email: email,
    }).then((response) => {
      if (response.data) {
        return alert(response.data.message)
      }
    }).catch(err => {
      console.log(err.message)
    })
  }
  openSearch = (param) => (e) => {
    localStorage.setItem("country_name", param);
    if (
      window.location.toString() === "http://localhost:3000/#/institutelist" ||
      window.location.toString() ===
      "https://formee.bicsglobal.com/#/institutelist"
    ) {
      window.location.reload();
    } else {
      window.location.href = "/#/institutelist";
    }
  };
  render() {
    const { errors } = this.state;
    return template.call(this);
  }
}

export default Footer_Blocks;
