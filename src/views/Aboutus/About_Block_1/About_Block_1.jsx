import "./About_Block_1.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import Aboutimg from '../../../assets/img/foe-circle-1.svg';

function template() {
  return (
    <div className="about-block-1 about-student-ed-section">
      <Row>
        <Col xs="12" xl="12" lg="12">
          <div className="foe-about-block">
            <div className="container">
              <Col xs="12" xl="6" lg="6">

                <div className="row w-100">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 foe-about-left">
                    <div className="about_Sted_box">
                      <Card className="w-100">
                        <CardBody>
                          <CardText className="foe-card-subtitle">About us</CardText>
                          <CardTitle className="foe-card-title">We connect students and education providers, globally.
                        </CardTitle>
                          <CardText className="foe-card-body mb-4">
                            Formee Express is an online study portal aimed at bringing students and educational institutions together to streamline the admission and enrollment process. Formee Express will be a resource for students, and all other stakeholders in the education sector, to acquire and exchange information on admissions, eligibility, scholarships, accommodation and any other challenge that students may face when studying abroad. We provide education providers with access to a large talent pool of students, facilitating enrollment assistance to students through Formee Express’ Preferred Partners. Our customer care team is available 24/7, around the world.
                            </CardText>

                        </CardBody>
                      </Card>
                    </div>
                  </div>

                </div>

              </Col>
              <Col xs="12" xl="6" lg="6">
                <div className="abo_sed"></div>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default template;
