import "./University_Overview.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import Service3 from '../../../assets/img/foe-service-3.svg';
import Arrowdown from '../../../assets/img/ArrowDown.svg';
import config from '../../../config.json';


function template() {

  const studenturl = `${config.student_url}`;
  const university_url = `${config.university_url}`;
  const agenturl = `${config.agent_url}`;

  return (
    <div className="student-overview education-page-wrapper partners-overview">

      <div className="foe-student-block education_Services_Wrapper">
        <div className="row w-100 foe-no-margin">
          <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6 foe-student-service">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 col-12 foe-service-left">
              <Card className="w-100 foe-card mb-0">
                <CardBody>

                  <p className="foe-card-subtitle">OUR SERVICES</p>
                  <CardTitle className="foe-card-title pr-4">Make your institution stand out by becoming a partnering school</CardTitle>
                  <CardText className="foe-card-body">
                    Attract the best students from around the world with Formee Express
                      </CardText>
                  <CardLink href="#" className="foe-white-a foe-student-link"> Explore</CardLink>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6">

          </div>
        </div>
      </div>


      <div className="student-overview-inner partners-overview-inner education-overview-inner">

        <Row>
          <Col xs="12" xl="12" lg="12">
            <div className="foe-about-block">
              <div className="row w-100 foe-no-margin">
                <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                  <div className="foe-service-header">
                    <p className="foe-card-subtitle">Service &amp; Benefits</p>
                    <h4 className="foe-card-title card-title">Attract committed students</h4>
                    <p className="partner-header-sub">Formee Express qualifies students suited to your institution from 120 + countries.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-service-left">
                  <div className="foe-partner-bg">

                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-service-left">
                  <Card className="w-100 foe-card">
                    <CardBody>
                      <CardText className="foe-card-body">
                        What we offer
                      </CardText>
                      <div className="partner-box">
                        <ul className="service-ul">
                          <li>Student applications from diverse backgrounds</li>
                          <li>Receive qualified and complete student applications</li>
                          <li>Ethical Preferred Partners (recruiters)</li>
                          <li>Document verification (IELTS, prior study, etc)</li>
                          <li>Promotional opportunities</li>
                          <li>Customer service and admissions support</li>
                          <li>A streamlined admissions portal</li>
                        </ul>
                      </div>
                      <CardLink href={university_url} className="foe-white-a  ml-0"><span>REGISTER NOW</span></CardLink>
                    </CardBody>
                  </Card>
                </div>

              </div>
            </div>
          </Col>
        </Row>
        <div className="education_sec_section">
          <Row>

            <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-partner-right">
              <Card className="w-100 foe-card">
                <CardBody>
                  <CardText className="foe-card-body">
                    Promotional opportunities
                      </CardText>
                  <div className="partner-box">
                    <ul className="service-ul">
                      <li><span>Market directly to students actively seeking to study with providers of repute</span></li>
                      <li><span>Self-manage your campaigns</span></li>


                    </ul>
                  </div>
                  <CardText className="foe-card-body">
                    All-in-one Dashboard
                      </CardText>
                  <div className="partner-box">
                    <ul className="service-ul">
                      <li><span>A user-friendly interface, with everything you need all accessible from the dashboard.</span></li>
                    </ul>
                  </div>
                  <CardLink href="#" className="foe-white-a ml-0"><span>REGISTER NOW</span></CardLink>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-r-sec">
              <div className="foe-partner-bg-sec">

              </div>
            </div>
          </Row>
        </div>

      </div>

      <div className="foe-university-list">
        <div className="container mx-auto">
          <div className="education-bttom-services">
            <ul className="service-ul col-md-12">
              <li>Increase Student Diversity</li>
              <li>Document Verification</li>
              <li>Receive Quality Applications</li>
              <li>Applicant Matching</li>
              <li>Approved Recruiter Network</li>
              <li>Promotional Channels</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default template;