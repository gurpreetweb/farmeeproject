import "./services.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import Service1 from './../../assets/img/foe-service-1.svg';
import Arrowdown from './../../assets/img/ArrowDown.svg';
import ArrowRight from './../../assets/img/ArrowRight.svg';
import { Link, NavLink } from "react-router-dom";


function template() {
  return (
    <div className="student-overview main_services_page_wrapper">
      <div className="foe-student-block main_Services_Wrapper">
        <div className="row w-100 foe-no-margin">
          <div className="col-12 col-xl-8 col-sm-12 col-lg-8 col-md-8 foe-student-service">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 col-12 foe-service-left">
              <Card className="w-100 foe-card mb-0">
                <CardBody>
                  <CardTitle className="foe-card-title">OUR SERVICES</CardTitle>
                  <CardText className="foe-card-body">
                    Course information is available on the website for students researching their ideal program, education provider and location to study

                      </CardText>
                  <CardLink href="#" className="foe-white-a foe-student-link"> Explore</CardLink>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6">
            &nbsp;
           </div>
        </div>
      </div>


      <div className="student-overview-inner">
        <Container>
          <div className="foe-service-header">

            <p className="foe-card-subtitle">services</p>

            <h4 className="foe-card-title card-title">The services we offer</h4>
            <p className="paragraph_serv">With differing services for Students, Education Providers and Preferred Partners, Formee Express streamlines the application, verification and student management procedures; all in one system. Select an information pack suitable for your needs below!
</p>
          </div>
          <Row>

            <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left services_Student">
              <Card className="w-100 foe-card">
                <CardBody>

                  <CardTitle className="foe-card-title">Students</CardTitle>

                  <Link to="/students"> <CardLink className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find Out More</span></CardLink></Link>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left services_p_partner">
              <Card className="w-100 foe-card">
                <CardBody>
                  <CardTitle className="foe-card-title">preferred partners</CardTitle>

                  <Link to="/partners-overview">   <CardLink href="#" className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find Out More</span></CardLink></Link>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left services_ed_pr">
              <Card className="w-100 foe-card">
                <CardBody>

                  <CardTitle className="foe-card-title">education providers</CardTitle>

                  <Link to="/university">     <CardLink href="#" className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find Out More</span></CardLink></Link>
                </CardBody>
              </Card>
            </div>

          </Row>
        </Container>
      </div>


    </div>
  );
};

export default template;
