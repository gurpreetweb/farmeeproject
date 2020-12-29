import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./Footer_Blocks.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  Button,
} from "reactstrap";
import Footerlogo from "../../assets/img/brand/formee-footer-logo.png";
function template() {
  return (
    <div className="footer-blocks">
      <Container>
        <Row>
          <Col xl="12" md="12" lg="12" sm="12" xs="12">
            <div className="footer_logo">
              <img
                src={Footerlogo}
                className="footer-logo-img"
                alt="footer-logo"
                width="249"
                height="auto"
              />
            </div>
          </Col>
          <Col xl="12" md="12" lg="12" sm="12" xs="12">
            <Row>
              <div className="col-xl-3 col-lg-15">
                <ListGroup>
                  <ListGroupItemHeading>Study Destinations</ListGroupItemHeading>
                  {/* <ListGroupItem onClick={this.openSearch("Australia")}>
                    Australia
                  </ListGroupItem>
                  <ListGroupItem onClick={this.openSearch("Canada")}>
                    Canada
                  </ListGroupItem>
                  <ListGroupItem onClick={this.openSearch("Germany")}>
                    Germany
                  </ListGroupItem>
                  <ListGroupItem onClick={this.openSearch("South Africa")}>
                    Sounth Africa
                  </ListGroupItem>
                  <ListGroupItem onClick={this.openSearch("United States")}>
                    USA
                  </ListGroupItem>
                  <ListGroupItem onClick={this.openSearch("United Kingdom")}>
                    United Kingdom
                  </ListGroupItem> */}
                  {this.state.for_student.map(cmsData => (
                    <ListGroupItem onClick={this.handleClick(cmsData.id)}>{cmsData.name} </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
              <div className="col-xl-3 col-lg-15">
                <ListGroup>
                  <ListGroupItemHeading>
                    Partnerships
                  </ListGroupItemHeading>
                  <ListGroupItem><Link to="/preferredpartner" onClick={() => {
                    window.scrollTo(0, 0);
                  }}>Preferred Partners</Link> </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/educationproviders">
                      Education Providers
                    </Link></ListGroupItem>
                  {this.state.for_pp.map(cmsData => (
                    <ListGroupItem onClick={this.handleClick(cmsData.id)}>{cmsData.name} </ListGroupItem>
                  ))}
                </ListGroup>
              </div>

              <div className="col-xl-3 col-lg-15">
                <ListGroup>
                  <ListGroupItemHeading>About</ListGroupItemHeading>
                  <ListGroupItem><Link to="/career">Career</Link> </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/contactus">Contact Us</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/aboutus">About Us</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <div className="col-xl-3 col-lg-15">
                <ListGroup>
                  <ListGroupItemHeading>Legal</ListGroupItemHeading>
                  <ListGroupItem >
                    <Link to="legal/">Terms & Conditions</Link>
                  </ListGroupItem>
                  <ListGroupItem> <Link to="/terms">Terms Of Use</Link></ListGroupItem>
                  <ListGroupItem><Link to="/privacy">Privacy Policy</Link></ListGroupItem>
                  {this.state.help_center.map(cmsData => (
                    <ListGroupItem onClick={this.handleClick(cmsData.id)}>{cmsData.name} </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
              <div className="col-xl-3 col-lg-15">
                <ListGroup>
                  <ListGroupItemHeading>help center</ListGroupItemHeading>
                  <ListGroupItem><Link to="/setupaccount">Set Up Account</Link></ListGroupItem>
                  <ListGroupItem>
                    <Link to="/faq">FAQs</Link>
                  </ListGroupItem>

                  {this.state.help_center.map(cmsData => (
                    <ListGroupItem onClick={this.handleClick(cmsData.id)}>{cmsData.name} </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Row>

            <Row className="foe-row-border newsletter">
              <div className="col-xl-6 col-lg-6 col-12 foe-newsletter">
                <ListGroup>
                  <ListGroupItemHeading>Newsletter</ListGroupItemHeading>

                </ListGroup>

                <div className="foe-bottom-footer">
                  <input color="primary" className="foe-mail-btn" placeholder="Email Address" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                  <Button color="secondary" className="foe-sub-btn" onClick={() => {
                    this.handleSubmit(this.state.email)
                  }}>
                    Subscribe
              </Button>{" "}
                </div>

              </div>
              <div className="col-xl-5 col-lg-5 col-12">
                <div className="footer-social-icon">
                  <span>Get social</span>
                  <ul>
                    <li><a target="_blank" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  </ul>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xl="12" md="12" lg="12" sm="12" xs="12">
            <div className="foe-row-border-bottom">
              <p className="foe-footer-text">
                &copy; 2020 formee express All rights reserved.
            </p>
            </div>
          </Col>

        </Row>
      </Container>
    </div >
  );
}

export default template;