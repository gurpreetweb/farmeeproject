import "./educationproviders.css";
import React from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Modal from 'react-modal';
import edubanner from "../../assets/img/parnter-education-banner.jpg";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function template() {
  return (
    <div className="preferredpartner_page_wrapper">
      <div className="education_pro_banner">
        <img src={edubanner} alt="study_banner" />
      </div>
      <div className="preferredpartner_box_wrapper">
        <Container>
          <h1 className="main_heading">Partner with us</h1>
          <div className="preferred_text_box">
            <h2>Become an Education Partner</h2>

            <p>schools,universities and educational institutions all benefit from the Formee Express admissions and enrollment platform. join other recognised providers and reach globol audiences to increase your student intake options!</p>
            <h2>Enquire now</h2>

            <p>Apply to become an education Provider now by follwing the three step enquiry process.</p>

            <h1> 1. Step one</h1>
            <p>Simply start by filling out the enquiry form below.</p>

            <h1>2. step two</h1>

            <p>Our support team will get in touch with you by phone or email to verify your information.</p>

            <h1>3. step three</h1>
            <p>Receive your login credentials and get started setting up your Preferred partner Profile!</p>
            <p>Complete the from below to get started!</p>
          </div>
          <div className="preferred_enquiry_form">
            <h1>Enquiry form</h1>
            <div className="Enquiry_form">
              <form>
                <Row>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Business Name
" required onChange={(e) => { this.setState({ ...this.state, provider_name: e.target.value }) }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Business Number" required onChange={(e) => { this.setState({ ...this.state, bussiness_name: e.target.value }) }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Postal/Business Address" required onChange={(e) => { this.setState({ ...this.state, business_post_address: e.target.value }) }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Postal/Business Post Code" required onChange={(e) => { this.setState({ ...this.state, business_post_code: e.target.value }) }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group select">
                      <CountryDropdown onChange={(value) => {
                        return this.setState({ ...this.state, country: value })
                      }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group select">
                      <RegionDropdown
                        onChange={(value) => {
                          return this.setState({ ...this.state, state: value })
                        }}
                        country={this.state.country} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Applicant Name" required onChange={(e) => { this.setState({ ...this.state, applicantName: e.target.value }) }} />
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <select id="country_code" name="country" class="form-control">
                            <option>+61</option>
                            <option>+91</option>
                            <option>+44</option>
                            <option>+87</option>
                            <option>+56</option>
                          </select>
                        </div>
                        <input type="text" class="form-control grey-input" placeholder="Enter Applicant Contact Number" required onChange={(e) => { this.setState({ ...this.state, applicantContact: e.target.value }) }} />
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" xl="6" md="6">
                    <div className="form-group">
                      <input type="text" class="form-control grey-input" placeholder="Enter Applicant Email Address" required onChange={(e) => { this.setState({ ...this.state, applicantEmail: e.target.value }) }} />
                    </div>
                  </Col>

                  <Col xs="12" xl="12" md="12">
                    <div className="form-group">
                      <button type="submit" class="btn btn-primary" onClick={(event) => {
                        this.handleSubmit(event)
                      }}>Submit</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Container>
        <Modal
          isOpen={this.state.isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className="perferredpart_box_popup">
            <div className="perferredpart_popup">
              <span className="popup_close_icon"> <button onClick={() => {
                this.setState({ ...this.state, isOpen: !this.state.isOpen })
              }}>x</button></span>
              <div>
                <h1>Thank you for your interest <br></br> in becoming a preferred partner!</h1>

                <p>we will contact you within 48 hours to verify your request.</p>
                <button type="submit" class="btn btn-primary" onClick={() => {
                  this.setState({ ...this.state, isOpen: !this.state.isOpen })
                }}>Ok</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default template;