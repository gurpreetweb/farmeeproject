import "./account.css";
import React from "react";
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import setupbanner from "./../../assets/img/SET_UP_ACCOUNT.jpg";

function template() {
  return (
    <div className="faq_page_wrapper">
      <div className="account-banner-box">
        <img src={setupbanner} alt="banner" />
      </div>
      <div className="setup_account_wrapper">
        <div className="foe-account-accordian foe-about-block">
          <div className="container">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
              <div className="foe-service-header">
                <h4 className="foe-card-title card-title">Set up accounts</h4>
              </div>
            </div>
            <div className="setac_accordion_Wrap">
              <div className="accordion" id="accordion">
                <div className="card">
                  <div className="card-header active" id="acheadingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accollapseOne" aria-expanded="true" aria-controls="accollapseOne">
                        Students
                </button>
                    </h5>
                  </div>

                  <div id="accollapseOne" className="collapse show" aria-labelledby="acheadingOne" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Sign up for a Student account</h2>
                          <p>Set up a Student account instantly! Follow this <a href="#">link</a> to the sign up page, where you can populate your information or authenticate with Google or Facebook.
</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="accordion" id="accordion">
                <div className="card">
                  <div className="card-header active" id="acheadingtwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accollapsetwo" aria-expanded="true" aria-controls="accollapsetwo">
                        Preferred partner
        </button>
                    </h5>
                  </div>

                  <div id="accollapsetwo" className="collapse show" aria-labelledby="acheadingtwo" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Sign up for a Preferred Partner account</h2>
                          <p>For more information on the Preferred Partner subscription process, <a href="#">click here.</a></p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="accordion" id="accordion">
                <div className="card">
                  <div className="card-header active" id="acheadingthree">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accollapsethree" aria-expanded="true" aria-controls="accollapsethree">
                        education providers
        </button>
                    </h5>
                  </div>

                  <div id="accollapsethree" className="collapse show" aria-labelledby="acheadingthree" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Sign up for a education providers account</h2>
                          <p>For more information on the Education Provider subscription process,<a href="#">click here.</a>.
</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default template;