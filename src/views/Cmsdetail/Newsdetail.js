import React from "react";
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
import studyAus from "../../assets/img/study-aus-banner.jpg";
import studyCan from "../../assets/img/study-location-canada.jpg";
import studyNew from "../../assets/img/study-newz-banner.jpg";
import studyUk from "../../assets/img/study-uk-banner.jpg";
import studyUsa from "../../assets/img/study-usa-banner.jpg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
var baseurl = `${config.baseurl}/`;
var baseurl_file = `${config.baseurl_file}/`;

function submitForm(contentType, data, setResponse) {
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
    constructor(props) {
        super(props);
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
            newsDetail: ""
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
        console.log(this.props.match.params.id, 'Data is sent')

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
        axios.get(baseurl + "newsdetail/" + this.props.match.params.id).then((response) => {
            console.log(response, "in the res")
            this.setState(
                {
                    newsDetail: response.data,
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
                        <img src={`https://admin.formeeexpress.com/uploads/${this.state.image}`} alt="study_banner" />
                    </div>
                </div>
                <div className="all_country_study_details">
                    <div className="study_heading">
                        <Container> <h1>{this.state.newsDetail.title ? this.state.newsDetail.title : ""}</h1></Container>
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
                                                        convertFromHTML(this.state.newsDetail.description ? this.state.newsDetail.description : "")
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
                                                                <li onClick={() => {
                                                                    window.location.reload()
                                                                    window.scrollTo(0, 0);
                                                                }}><Link to={`/news-detail/${value.id}`}>{value.title}</Link></li>
                                                                <br />
                                                            </ul>
                                                        </div>
                                                    </>
                                                )
                                            }) : ""}
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
