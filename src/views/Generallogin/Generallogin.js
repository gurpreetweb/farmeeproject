import React, { Component, lazy, Suspense } from 'react';
import llogo from '../../assets/img/brand/university-logo.svg';
import backarrow from "../../assets/img/back_arrow.svg";
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Container
} from 'reactstrap';
import config from '../../config.json';

class Generallogin extends Component {
  constructor(props) {
    super(props);

  }




  render() {
	  
	  const studenturl = `${config.student_url}`;
	  const university_url = `${config.university_url}`;
	  const agenturl = `${config.agent_url}`;

    return (
      <div className="">
        <a className="back-btn mr-3 ml-5">
                <Button  className="px-0 btn-transparent">
                  <span className="pr-1">
                    {" "}
                    <img src={backarrow} alt="" />
                  </span>{" "}
                  <span className="align-middle">Back </span>
                </Button>
              </a>
        <div className="mx-auto login-bos text-center">
          <img src={llogo} alt="formee-logo"  className="login-logo" />
          </div>
        <div className="foe-service-block gray-bg mb-5">
          <Container>
            <Row>
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                <div className="foe-service-header my-5">

                  

                  <p className="foe-card-title mx-auto login-content">Welcome to Formee Express Select your <span  className="font-600">account</span> to login!</p>
                   
                </div>
              </div>
              <div className="row col-md-12">
                <div className="foe-about-boxx mb-4">
                  <div className="row w-100 pb-5 d-flex justify-content-center">
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={studenturl}>
                     <button className="btn service-btn f-white btn-std">
                       <span>STUDENT PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					<a href={agenturl}>
                    <button className="btn service-btn f-white btn-univ">
                       <span>PREFERRED<br/> PARTNER PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={university_url}>
                    <button className="btn service-btn f-white btn-agent">
                     <span>UNIVERSITY PORTAL</span>
                     </button></a>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Generallogin;
