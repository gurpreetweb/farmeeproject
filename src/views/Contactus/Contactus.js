import React from "react";
import { Link, Redirect } from 'react-router-dom';
import Select from 'react-select';
import "./Contactus.css";
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardLink, CardImg, Input } from 'reactstrap';
import Service1 from '../../assets/img/foe-service-1.svg';
import Arrowdown from '../../assets/img/ArrowDown.svg';
import ArrowRight from '../../assets/img/ArrowRight.svg';
import axios from 'axios';
import config from '../../config.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
var baseurl = `${config.baseurl}/`;
var baseurl_file = `${config.baseurl_file}/`;


const selectcountryoptions = [
 
  { value: " ", label: "CALL" },
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Åland Islands", label: "Åland Islands" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" }
];
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#e0e0e0",
    primary: '#444444'
  }

});

function submitForm(contentType, data, setResponse, path) {
  console.log('Data is sent')
  axios({
    url: baseurl + `contactmail`,
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  })
    .then((response) => {
      console.log("resp", response);
      setResponse(response.data);

    })
    .catch((error) => {
      setResponse("error");
    });
}

class Contactus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      phone: "",
      email: "",
      message: "",
      faqdata: [],
    };

    axios.get(baseurl + "getAllFaqData").then((response) => {

      this.setState(
        {
          faqdata: response.data.faq,
        });
    });

  }
  openFaqurl = (val) => {
    window.open(val, "_blank", 'noopener,noreferrer')
  }
  createmeeting = (e) => {
    e.preventDefault();
    const { username, email, phone, message } = this.state;
    console.log(username, email, phone, message);
    // const errors = validate();

    const formData = new FormData();
    formData.append("name", this.state.username);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("message", this.state.message);
    // toast("Query Sent Successfully.");  
    submitForm(
      "",
      formData,
      (msg) => {
        if (msg.status_code == 100) {
          toast.success(msg.message);
        }
        else {
          console.log("data is sent")
          toast.success("Query Sent Successfully.");
          setTimeout(function () {
            window.location.reload();
          }, 3000);

        }
      },
      "studentcomposemail"
    );
  }

  render() {
    return (

      <div className="contact_page_wrapper">
        <div className="contact_page_banner">
          <div className="contact_form_wrap">
            <div className="contact-form-box">
              <div className="row justify-content-center">
                <div className="col-12">

                  <div className="form-group text-left">
                    <h1>Get In Touch</h1>
                    <p className="text-h3">Please Fill Out The Form </p>
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
                  <div className="form-group" id="call">
                    {/* <select id="call" name="call" class="form-control">
                      <option value="none" selected disabled hidden>
                        CALL</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                    </select> */}
                    <Select
                        defaultValue={selectcountryoptions[0]}
                        options={selectcountryoptions}
                        clearable={false}
                         theme={theme}
                      ></Select>
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

  }
}


export default Contactus;
