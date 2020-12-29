import "./About_Block_2.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardImg } from 'reactstrap';
import Service1 from '../../../assets/img/foe-service-1.svg';
import Service2 from '../../../assets/img/foe-service-2.svg';
import Service3 from '../../../assets/img/foe-service-3.svg';

function template() {
  return (
    <div className="about-block-2 pb-5 about_does_work">
      <div className="container-fluid">
        <Container>
          <Row>
            <Col xs="12" xl="12" lg="12">
              <div className="foe-about-block">
                <div className="row w-100">
                  <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                    <div className="foe-service-header">

                      <p className="foe-card-subtitle mb-0 mt-5">OUR SERVICES</p>

                      <h4 className="foe-card-title card-title">Here's what we do</h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left">
                    <Card className="w-100 foe-card">
                      <CardBody>
                        <div className="foe-img-block">
                          <CardImg variant="top" className="foe-service-img" src={Service1} />
                        </div><div className="work-col-1">
                          <CardTitle className="foe-card-title">Students</CardTitle>
                          <CardText className="foe-card-body">
                            Formee Express will provide students with the ability to explore study options around the world. They will be able to see the latest updates about the programs offered by all local and international universities on one centralised platform; where they can choose their preferred program, check eligibility and apply.
                      </CardText>
                        </div>
                        <CardLink className="foe-white-a" onClick={this.openOurService("Student")}><span>Student Information</span></CardLink>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-center">
                    <Card className="w-100 foe-card">
                      <CardBody>
                        <div className="foe-img-block">
                          <CardImg variant="top" className="foe-service-img" src={Service2} />
                        </div><div className="work-col-1">
                          <CardTitle className="foe-card-title">Preferred Partners</CardTitle>
                          <CardText className="foe-card-body">
                            We connect students to our Preferred Partners, who speak the same language and are locally based in the same region as the student. Preferred Partners are trusted advisors who assist students throughout the complexities of the enrolment process, providing customised advice and guidance.
                            
                      </CardText></div>
                        <CardLink className="foe-white-a" onClick={this.openOurService("Agent")}><span>Preferred Partner Information</span></CardLink>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-right">
                    <Card className="w-100 foe-card">
                      <CardBody>
                        <div className="foe-img-block">
                          <CardImg variant="top" className="foe-service-img" src={Service3} />
                        </div><div className="work-col-1">
                          <CardTitle className="foe-card-title">Education Providers</CardTitle>
                          <CardText className="foe-card-body">
                            Formee Express provides education providers with a plentiful pool of student candidates, whose documentation and eligibility are each individually pre-verified by our team. This streamlines the selection process for you, saving time and increasing application transparency.
                            
                      </CardText>
                        </div>
                        <CardLink className="foe-white-a" onClick={this.openOurService("University")}><span>Education provider information
</span></CardLink>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default template;
