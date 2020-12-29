import "./Contactus.css";
import React from "react";
import { Container, Button, Row, Col, Form, Badge, FormGroup, CardLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


function template() {
  return (

    <div className="contact_page_wrapper">
      <div className="contact_page_banner">
        <div className="contact_form_wrap">
          <div className="contact-form-box">
            <div className="row justify-content-center">
              <div className="col-12">

                <div className="form-group text-left">
                  <h1>Get in touch</h1>
                  <p className="text-h3">Please fill out the form </p>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-12">

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <select id="country_codes" name="country code" class="form-control">
                        <option>+61</option>
                        <option>+91</option>
                        <option>+44</option>
                        <option>+87</option>
                        <option>+56</option>
                      </select>
                    </div>
                    <input type="tel" class="form-control" id="phone" name="phone"
                      placeholder="Phone number" />
                  </div>

                </div>
                <div className="col-12"><textarea class="form-control" id="message" name="message"
                  rows="8" placeholder="message" required></textarea></div>
                <div className="col-12">
                  <div className="submit-btn">
                    <button className="btn btn-primary mt-4">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus_box_wrapper">
        <Container>
          <div className="get_touch_section">
            <div className="touc_box">
              <span>Contact us</span>
              <h1>How to get in touch</h1>
              <p>There are many diffrent ways to get in contact with us here at Formee Express.
              You can phone or visit any of our local offices, you can live chat with us or even send us a message using the text boxes above
           </p>
            </div>
            <div className="touch_btn">
              <div className="send_email">
                <CardLink className="btn">Send Email</CardLink>
              </div>
              <div className="send_email">
                <div className="form-group">
                  <select id="call" name="call" class="form-control">
                    <option value="none" selected disabled hidden>
                      CALL</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                  </select>
                </div>
              </div>
              <div className="live_chat">
                <CardLink className="btn">Live Chat</CardLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="All_office_Wrapper">
        <Container>
          <div className="Office_mhea">
            <h1>Our Offices</h1>
          </div>
        </Container>
        <div className="All_office_location">
          <Container>
            <Row>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>Australian Office</h2>
            41 Boundary Rd, North Melbourne,
            VIC 3051 Australia
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>UK Office</h2>
            12-16 Addiscombe Road
            Croydon CR0 0XT UK
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>New Zealand Office</h2>
            84 Halesowen Avenue,
            Mount Eden, Auckland, 1041, New Zealand
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>China Office</h2>
            48 Xinhu Road, 1099 Lane
            Baoshan District Shanghai 201900
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>Malaysian Office</h2>
                    No. 9-5A, Level 5, Jalan Teknokrat 6 Cyber 5
                       Galleria CyberJaya, Selangor 63000 Malaysia
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
              <Col xs="12" xl="4" md="4">
                <div className="Office_location">
                  <h2>Canada Office</h2>
            700 - 1199 West Hastings Street, Vancouver BC V6E 3T5, Canada
            <div className="offic_numemail">
                    <label><b>Phone :</b> <a href="tel:+61396024110">+61396024110</a></label>
                    <label><b>Email:</b> admin@formeeexpress.com</label>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="contact-subscribe-wrapper">
        <Container>
          <div className="subscribe_wrapper">
            <h3>Subscribe to our newsletter</h3>
            <h1>Subscribe</h1>
            <p>Be the first to know of any updates or newsletters we send out.
Sign up to our Formee Express data base today.</p>
            <div className="contact_newsletter_Section">
              <input color="primary" className="foe-mail-btn" placeholder="Email Address" onChange={(e) => { this.setState({ email: e.target.value }) }} />

              <Button color="secondary" className="foe-sub-btn" onClick={() => {
                this.handleSubmit(this.state.email)
              }}>
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </Button>{" "}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default template;