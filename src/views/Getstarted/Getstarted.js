import React, { Component, lazy, Suspense } from 'react';
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

class Getstarted extends Component {
  constructor(props) {
    super(props);

  }




  render() {
	  
	  const studenturl = `${config.student_url}`;
	  const university_url = `${config.university_url}`;
	  const agenturl = `${config.agent_url}`;

    return (
      <div className="foe-service-container">
        <div className="foe-service-block">
          <Container>
            <Row>
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                <div className="foe-service-header">

                  <p className="foe-card-subtitle pt-5">WELCOME</p>

                  <h4 className="foe-card-title card-title">Get <span>started</span> now</h4>
                   
                </div>
              </div>
              <div className="row col-md-12">
                <div className="foe-about-boxx">
                <p className="foe-service-body">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
                  <div className="row w-100 pb-5">
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={studenturl}>
                     <button className="btn service-btn f-orange">
                       <span>STUDENT PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					<a href={agenturl}>
                    <button className="btn service-btn f-purple">
                       <span>PREFERRED<br/> PARTNER PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={university_url}>
                    <button className="btn service-btn f-blue">
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

export default Getstarted;
