import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer_Blocks from './../../views/Footer_Blocks/index';

import config from "../../config.json";
import $, { type } from "jquery";
import axios from "axios";
import moment from "moment";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mount } from "enzyme";

var baseurl = `${config.baseurl}`;
var baseurl1 = `${config.baseurl}/`;



const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  constructor() {
		super();
		this.state = {
      for_student:[],
      for_pp:[],
      about:[],
      for_university:[],
      help_center:[],
      contact:[],
    };
    // axios.get(baseurl + "/getAllCmsData").then((response) => 
    // {
      
    //   this.setState(
    //     {
    //       for_student: response.data.for_student,
    //       for_pp: response.data.for_pp,
    //       about: response.data.about,
    //       for_university: response.data.for_university,
    //       help_center: response.data.help_center,
    //       contact: response.data.contact,
    //     });
    // });

   
  }
  
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
       <div className="foe-footer-box py-5"><Footer_Blocks />
        {/* <span><a href="https://coreui.io">CoreUI</a> &copy; 2020 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span> */}
        </div> 
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
