import "./Ourservice_Content.css";
import React from "react";

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

function template(props) {
  console.log("output", props);
  return (
    <div className="foe-service-container foe-services-box">
        <div className="foe-service-block">
          <Container>
            <Row>
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                <div className="foe-service-header">

                  <p className="foe-card-subtitle pt-5">WELCOME</p>

                  <h4 className="foe-card-title card-title">Our Services</h4>
                   
                </div>
              </div>
              <div className="row col-md-12">
                <div className="foe-about-boxx">
                <p className="foe-service-body">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
                  <div className="row w-100 foe-no-margin pb-5">
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
                     <button className="btn service-btn f-orange" onClick={() => props.hideComponent("showHideDemo1")}>
                       <span>STUDENT OVERVIEW</span>
                     </button>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
                    <button className="btn service-btn f-purple" onClick={() => props.hideComponent("showHideDemo2")}>
                       <span>PREFERRED<br/> PARTNER OVERVIEW</span>
                     </button>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
                    <button className="btn service-btn f-blue" onClick={() => props.hideComponent("showHideDemo3")}>
                       <span>UNIVERSITY OVERVIEW</span>
                     </button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
  );
};

export default template;
