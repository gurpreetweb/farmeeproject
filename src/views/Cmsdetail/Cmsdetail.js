import React from "react";
import Select from 'react-select';
import { Link, Redirect } from 'react-router-dom';
import "./Cmsdetail.css";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg, Input } from 'reactstrap';
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
import studyAus from "../../assets/img/STUDY_LOCATION_AUSTRALIA.jpg";
import studyCan from "../../assets/img/study-location-canada.jpg";
import studyNew from "../../assets/img/study-newz-banner.jpg";
import studyUk from "../../assets/img/study-uk-banner.jpg";
import studyUsa from "../../assets/img/study-usa-banner.jpg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
var baseurl = `${config.baseurl}/`;
var baseurl_file = `${config.baseurl_file}/`;

const showstateOptions = [
  
  { value: " ", label: "Show By State" },
  { value: "Australian capital territory", label: "Australian capital territory" },
  { value: "victoria", label: "victoria" },
  { value: "Queensland", label: "Queensland" },
  { value: "New south wales", label: "new south wales" },
  { value: "Western australia", label: "Western australia" },
  { value: "South australia", label: "South australia" }
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

class Cmsdetail extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      phone: "",
      email: "",
      message: "",
      faqdata: [],
      name: '',
      cmsdescription: '',
      image: "",
      news: [],
      testimonials: ""
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

  componentDidMount() {
    /*
    const { data } = this.props.location
  if (data) {
    localStorage.setItem('cms_id', data);
  }
  */
    axios.get(baseurl + "getCmsdetail/" + localStorage.getItem('cms_id')).then((response) => {
     
      this.setState(
        {
          name: response.data.name,
          cmsdescription: response.data.content,
          image: response.data[0].image
        });
    });
    axios.get(baseurl + "newsbyid/" + localStorage.getItem('cms_id')).then((response) => {
      this.setState(
        {
          news: response.data.data,
        });
    });
    axios.get(baseurl + "getTestimonial/" + localStorage.getItem('cms_id')).then((response) => {
      console.log(response, "in the resr")
      this.setState(
        {
          testimonials: response.data.data,
        });
    });
  }

  render() {
    var word = this.state.name.split(" ");
    console.log(this.state.news, "in the rne")
    return (
      <div className="study_page_wrapper">
        <div className="Study_banner">
          <div class="study_banner">
            <img src={studyAus} alt="study_banner" />
          </div>
        </div>
        <div className="all_country_study_details">
          <div className="study_heading">
            <Container> <h1>{this.state.name}</h1></Container>
          </div>
          <div className="study_content_wrapper">
            <Container>
              <Row>
                <Col xs="12" xl="8" md="8">
                  <div className="study_left_content">
                    <div className="Study_data">
                      <Editor
                        className="Study_data"
                        toolbarHidden={true}
                        editorState={EditorState.createWithContent(
                          ContentState.createFromBlockArray(
                            convertFromHTML(this.state.cmsdescription)
                          )
                        )}
                        readOnly={true}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName textalleditable"
                        editorClassName="editorClassName"
                        onEditorStateChange={
                          this.onEditorStateChange
                        }
                      />
                    </div>
                    <div className="study_education_partner">
                      <div className="Education_partner_heading">
                        <h1>Education Partner</h1>
                        <div class="search_State">

                          <Select
                        defaultValue={showstateOptions[0]}
                        options={showstateOptions}
                        clearable={false}
                         theme={theme}
                      ></Select>
                        </div>
                      </div>
                      <div className="education_map">
                        <div class="googleMap">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35818.719732048536!2d-4.25169!3d55.868392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C+Glasgow+City%2C+UK!5e0!3m2!1sen!2sus!4v1448625188752" width="640" height="480"></iframe>
                        </div>

                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" xl="4" md="4">
                  <div className="study_right_contentbar">
                    <div className="latest_news_box">
                      <h1>Latest News</h1>
                      {this.state.news ? this.state.news.map((value, index) => {
                        return (
                          <>
                            <div className="latest_news_list" key={index}>
                              <ul>
                                <li><Link to={`/news-detail/${value.id}`}>{value.title}</Link></li>
                                <br />
                              </ul>
                            </div>
                          </>
                        )
                      }) : ""}
                    </div>
                    <div className="sidebar_testimonials">
                      <h1>Testimonials</h1>
                      <div className="sidebar_testimonials_box">
                        <div className="forms_testimonials">
                          <div className="client_Name">
                            <span className="clientname">Ravleen</span> - <span className="location"> Melbourne, Victoria</span>
                          </div>
                          <div className="post_date">
                            <span>2 days ago</span>
                          </div>
                          <div className="Testimonials_paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                            vestibulum.
                                  </div>

                        </div>

                        <div className="forms_testimonials">
                          <div className="client_Name">
                            <span className="clientname">Ravleen</span> - <span className="location"> Melbourne, Victoria</span>
                          </div>
                          <div className="post_date">
                            <span>2 days ago</span>
                          </div>
                          <div className="Testimonials_paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                            vestibulum.
                                  </div>

                        </div>

                        <div className="forms_testimonials">
                          <div className="client_Name">
                            <span className="clientname">Ravleen</span> - <span className="location"> Melbourne, Victoria</span>
                          </div>
                          <div className="post_date">
                            <span>2 days ago</span>
                          </div>
                          <div className="Testimonials_paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                            vestibulum.
                                  </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

    );
  }
}


export default Cmsdetail;
