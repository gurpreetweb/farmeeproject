import "./career.css";
import React from "react";
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import careerbanner from "./../../assets/img/CAREERS_PAGE.jpg";

function template() {
  return (
    <div className="faq_page_wrapper career_banner_section">
      <div className="account-banner-box">
        <img src={careerbanner} alt="banner" />
      </div>
      <div className="career_page_wrapper">
        <div className="foe-account-accordian foe-about-block">
          <div className="container">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
              <div className="foe-service-header">
                <h4 className="foe-card-title card-title">Careers At Formee Express</h4>
              </div>
            </div>
            <div className="setac_accordion_Wrap">
              <div className="accordion" id="accordion">
                <div className={this.state.isActive1 ? "card show_caoc" : "card"}>
                  <div className="card-header" id="acheadingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" onClick={() => { this.setState({ ...this.state, isActive1: !this.state.isActive1 }) }} data-toggle="collapse" data-target="#accollapseOne" aria-expanded="true" aria-controls="accollapseOne">
                        Business Development Officer
                </button>
                    </h5>
                  </div>

                  <div id="accollapseOne" className="collapse show" aria-labelledby="acheadingOne" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Formee Express Pty Ltd</h2>

                          <div className="job_description job_des_sec">
                            <h3>Job Description</h3>
                            <p>Identify, plan and execute the right model for onboarding vendors as desired<br></br>
Researching, contacting, negotiating and facilitating the complete online vendor onboarding process<br></br>
Prospecting, generating, qualifying, processing and following up on leads and appointment setting<br></br>
Providing consistent, concise, accurate and timely weekly/monthly sales lead gen activity reports to management<br></br>
Assist in preparing concise, targeted proposals and contracts<br></br>
Achieving sales lead gen and appointment quotas<br></br>
Develop a customer care guide and lead generation guide to train future staff in your team</p>
                          </div>
                          <div className="job_des_sec">
                            <h3>Skills</h3>
                            <p>More than 2 years experience in ecommerce or app based customer service management<br></br>
Must possess excellent communication skills both oral and written and be skilled in “Selling via Phone” successfully<br></br>
Microsoft Software: Word, Excel, PowerPoint, Outlook and Database related programs
Customer service general knowledge and sales tactics to interest new vendors<br></br>
Basic knowledge of InDesign or Photoshop to prepare presentations preferred but not compulsory</p>
                          </div>
                          <div className="job_des_sec">
                            <h3>Qualities</h3>
                            <p>Self directed and able to work autonomously<br></br>
‘The sky’s the limit’ mentality<br></br>
Clean and professional personal presentation</p>
                          </div>
                          <div className="job_des_email">Email <a href="mailto:careers@formee.com.au">careers@formee.com.au </a>to apply.</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="accordion" id="accordion">
                <div className={this.state.isActive2 ? "card show_caoc" : "card"}>
                  <div className="card-header active" id="acheadingtwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link  collapsed" type="button" data-toggle="collapse" data-target="#accollapsetwo" aria-expanded="true" onClick={() => { this.setState({ ...this.state, isActive2: !this.state.isActive2 }) }} aria-controls="accollapsetwo">
                        Frontend Developer
        </button>
                    </h5>
                  </div>

                  <div id="accollapsetwo" className="collapse" aria-labelledby="acheadingtwo" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Sign up for a Preferred Partner account</h2>
                          <p>We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.
</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="accordion" id="accordion">
                <div className={this.state.isActive3 ? "card show_caoc" : "card"}>
                  <div className="card-header active" id="acheadingthree">
                    <h5 className="mb-0">
                      <button className="btn btn-link  collapsed" type="button" data-toggle="collapse" data-target="#accollapsethree" aria-expanded="true" onClick={() => { this.setState({ ...this.state, isActive3: !this.state.isActive3 }) }} aria-controls="accollapsethree">
                        Backend Developer     </button>
                    </h5>
                  </div>

                  <div id="accollapsethree" className="collapse" aria-labelledby="acheadingthree" data-parent="#accordion">
                    <div className="card-body pr-3">
                      <div className="row mx-0">
                        <div className="col-md-12 foe-acc-body">
                          <h2>Sign up for a education providers account</h2>
                          <p>We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.
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