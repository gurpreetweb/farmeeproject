import React from "react";
import template from "./preferredpartner.jsx";
import axios from 'axios';
import config from "../../config.json";
var baseurl = `${config.baseurl}`;
class preferredPartner extends React.Component {
  constructor() {
    super();
    this.state = {
      provider_name: "",
      bussiness_name: "",
      business_post_code: "",
      company_phoneNumer: "",
      business_post_address: "",
      country: "",
      state: "",
      applicantName: "",
      applicantContact: "",
      countryCode: "",
      applicantEmail: "",
      isOpen: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = {
      providerName: this.state.provider_name,
      bussinessName: this.state.bussiness_name,
      phoneNumber: this.state.countryCode + this.state.applicantContact,
      address: this.state.business_post_address,
      country: this.state.country,
      state: this.state.state,
      name: this.state.applicantName,
      contactNumber: this.state.countryCode + this.state.applicantContact,
      email: this.state.applicantEmail
    }
    console.log(body, "in the bb")
    axios.post(baseurl + "/enquirypartner",
      body
    ).then((response) => {
      console.log(response, "in the bb")
      if (response.data.status_code === "200") {
        return this.setState({ ...this.state, isOpen: !this.state.isOpen })
      }
    }).catch(err => {
      console.log(err.message)
    })
  }
  render() {
    return template.call(this);
  }
}

export default preferredPartner;

