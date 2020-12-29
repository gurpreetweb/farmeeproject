import "./Aboutus_Banner.css";
import React from "react";
import Select from 'react-select';
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import searchorange from "../../../assets/img/search-orange-icon.svg";
import aboutbanner from "../../../assets/img/about-us-banner.jpg";
const countryOptions = [
  
  { value: " ", label: "Country" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" }
];
const studylevelOptions = [
  
  { value: " ", label: "Study Level" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" }
];
const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#e0e0e0",
    primary: '#444444',
    neutral60: 'hsl(0, 0%, 40%)'
  }

});



function template() {
  return (
    <div className="aboutus-banner">

      <div className="about-us-banner">
        <Container>
          <Row>
            <Col xs="12" xl="12" md="12">
              <div className="foe-banner-boxx">
                <div className="foe-about-boxx">
                  <div className="row col-md-12">
                    <div className="col-xs-12 col-xl-5 col-md-5 col-12 foe-top-1 foe-subject">

                      <input type="text" placeholder="Area of Study" className="form-control" />

                    </div>
                    <div className="col-xs-12 colxl-3 col-md-3 col-12 foe-top-2 foe-subject">
                      <div className="form-group">
                        
                        <Select
                        defaultValue={countryOptions[0]}
                        options={countryOptions}
                        clearable={false}
                         theme={theme}
                      ></Select>
             
                      </div>
                    </div>
                    <div className="col-xs-12 col-xl-3 col-md-3 col-12 foe-top-3 foe-subject">
                      <div className="form-group">
                      <Select
                        defaultValue={studylevelOptions[0]}
                        options={studylevelOptions}
                        clearable={false}
                         theme={theme}
                      ></Select>
                      </div>
                    </div>

                    <div className="search-box-orange">
                      <Button
                        type="submit"
                        className="search-icon float-md-right"
                      >
                        <img src={searchorange} alt="" />
                      </Button>
                    </div>
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
