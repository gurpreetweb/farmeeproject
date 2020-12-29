import "./Partners_Overview.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import Service2 from '../../../assets/img/foe-service-2.svg';
import Arrowdown from '../../../assets/img/ArrowDown.svg';
import config from '../../../config.json';


function template() {


  const studenturl = `${config.student_url}`;
  const university_url = `${config.university_url}`;
  const agenturl = `${config.agent_url}`;

  return (
    <div className="student-overview services-partners-page-wrapper">
      <div className="foe-student-block ser_pp_baaner">
        <div className="row w-100 foe-no-margin">
          <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6 foe-student-service">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 col-12 foe-service-left">
              <Card className="w-100 foe-card mb-0">
                <CardBody>

                  <p className="foe-card-subtitle">OUR SERVICES</p>
                  <CardTitle className="foe-card-title">Become a Preferred Partner and help students follow their dream!</CardTitle>
                  <CardText className="foe-card-body">
                    Use your existing recruitment skills to become a trusted intermediary between students and education providers throughout the admissions process.
                      </CardText>
                  <CardLink href="#" className="foe-white-a foe-student-link">Explore</CardLink>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6">

          </div>
        </div>
      </div>
      <div className="student-overview-inner partners-overview-inner">

        <Row>
          <Col xs="12" xl="12" lg="12">
            <div className="foe-about-block">
              <div className="row w-100 foe-no-margin">
                <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                  <div className="foe-service-header">

                    <p className="foe-card-subtitle">Service &amp; Benefits</p>

                    <h4 className="foe-card-title card-title">Connect students with renowned education providers</h4>

                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-service-left">
                  <div className="foe-partner-bg">

                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6 col-12 foe-partner-right">
                  <Card className="w-100 foe-card">
                    <CardBody>
                      <CardText className="foe-card-body">
                        Give your students a better chance at admission into their preferred area of study by using our streamlined application process. Build industry relationships with the best education providers, globally.

                      </CardText>
                      <CardText className="partner-box">
                        <ul className="service-ul">
                          <li>Partner with hundreds of educational institutions</li>
                          <li>Find programs faster</li>
                          <li>Easy application process</li>
                          <li>Customer service support</li>
                          <li>Preferred Partners portal </li>
                          <li>Commission and bonuses</li>
                        </ul>
                      </CardText>
                      <CardLink href={agenturl} className="foe-white-a">work with us</CardLink>
                    </CardBody>
                  </Card>
                </div>

              </div>
            </div>
          </Col>
        </Row>

      </div>
      <div className="foe-timeline">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
              <div className="foe-service-header">

                <p className="foe-card-subtitle">3 EASY steps</p>

                <h4 className="foe-card-title card-title font-32">How does it work for our certified recruitment partners?
</h4>
                <p className="foe-card-sb-title">Our online portal acts as an optimised search engine, assisting you to find education providers that suit your students specific needs and preferences.</p>
              </div>
            </div>
            <div className="col-md-12">

              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="glyphicon glyphicon-off"></i></div>
                  <div className="timeline-panel">
                    <div className="foe-timeline-box">
                      <div className="timeline-heading">
                        <h4 className="timeline-title"><span>Step 1</span></h4>
                        <p className="timeline-head">Find the right program and school</p>
                      </div>
                      <div className="timeline-body">
                        <p> Evaluate the student’s objectives and preferences in order to assist in finding the right program for them. Then, access the portal and make a selection of suitable providers.
</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                  <div className="timeline-panel">
                    <div className="foe-timeline-box">
                      <div className="timeline-heading">
                        <h4 className="timeline-title"><span>Step 2</span></h4>
                        <p className="timeline-head">Submit applications</p>
                      </div>
                      <div className="timeline-body">
                        <p>Create student profiles and submit them to an unlimited number of educational institutions.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                  <div className="timeline-panel">
                    <div className="foe-timeline-box">
                      <div className="timeline-heading">
                        <h4 className="timeline-title"><span>STEP 3</span></h4>
                        <p className="timeline-head">Acceptance and rewards</p>
                      </div>
                      <div className="timeline-body">
                        <p>Once your student is accepted, you will receive a commission and other bonuses! Once they are enrolled, you can manage the student’s file in the system for future reference. </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default template;