import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Container } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/formee-logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import config from '../../config.json';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',

    };

  }

  componentDidMount() {
    let url = window.location.href.split("/").pop();
    this.setState({ url });
  }

  openOurService = (param) => e => {

    if (param === "Student") {
      localStorage.setItem("showHideDemo1", "true");
      localStorage.setItem("showHideDemo2", "false");
      localStorage.setItem("showHideDemo3", "false");
      if (window.location.href !== `${config.own_url}` + "/#/ourservice") {
        window.location = "/#/students";

      } else {
        window.location.reload();

      }

    }
    if (param === "Agent") {
      localStorage.setItem("showHideDemo2", "true");
      localStorage.setItem("showHideDemo1", "false");
      localStorage.setItem("showHideDemo3", "false");
      if (window.location.href !== `${config.own_url}` + "/#/ourservice") {
        window.location = "/#/partners-overview";
      } else {
        window.location.reload();
      }
    }
    if (param === "University") {
      localStorage.setItem("showHideDemo3", "true");
      localStorage.setItem("showHideDemo1", "false");
      localStorage.setItem("showHideDemo2", "false");
      if (window.location.href !== `${config.own_url}` + "/#/ourservice") {
        window.location = "/#/university";
      } else {
        window.location.reload();
      }
    }
    if (param === "Services") {
      localStorage.setItem("showHideDemo3", "true");
      localStorage.setItem("showHideDemo1", "false");
      localStorage.setItem("showHideDemo2", "false");
      if (window.location.href !== `${config.own_url}` + "/#/ourservice") {
        window.location = "/#/services";
      } else {
        window.location.reload();
      }
    }
  };

  render() {

    const loginurl = `${config.student_url}`;
    const { children, ...attributes } = this.props;




    return (

      <React.Fragment>
        <Container className="foe-py-2">
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <Link to="/aboutus"><AppNavbarBrand
            full={{ src: logo, width: 249, height: "auto", alt: 'Formee Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
          /></Link>
          <AppSidebarToggler className="d-md-down-none d-none" display="lg" />

          <Nav className="d-md-down-none d-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/users" className="nav-link">Users</Link>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="#" className="nav-link">Settings</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto foe-nav-right" navbar>
            <NavItem className="d-md-down-none">
              {this.state.url == "aboutus" ?
                <NavLink to="/aboutus" className="nav-link active-link">About</NavLink>
                :
                <NavLink to="/aboutus" className="nav-link">About</NavLink>
              }
            </NavItem>
            <NavItem className="d-md-down-none">

              <div class="dropdown service-drpdwn">
                <NavLink to="/ourservice" className="nav-link active-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our Services</NavLink>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" onClick={this.openOurService("Student")} >Student</a>
                  <a class="dropdown-item" onClick={this.openOurService("Agent")} >Preferred Partners</a>
                  <a class="dropdown-item" onClick={this.openOurService("University")}>Universities</a>
                  <a class="dropdown-item" onClick={this.openOurService("Services")}>Services</a>
                </div>
              </div>


            </NavItem>

            <NavItem className="d-md-down-none">
              <NavLink to="/contactus" className="nav-link" >Contact Us</NavLink>
            </NavItem>
            <NavItem className="d-md-down-none foe-start-btn">
              {this.state.url == "getstarted" ?
                <div class="dropdown start-drpdwn">
                  <NavLink to="/getstarted" className="nav-link active-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Started</NavLink>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href={`${config.student_url}`}>Student</a>
                    <a class="dropdown-item" href={`${config.agent_url}`}>Preferred Partners</a>
                    <a class="dropdown-item" href={`${config.university_url}`}>Universities</a></div>
                </div>
                :
                <div class="dropdown start-drpdwn">
                  <NavLink to="/getstarted" className="nav-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Started</NavLink>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href={`${config.student_url}`}>Student</a>
                    <a class="dropdown-item" href={`${config.agent_url}`}>Preferred Partners</a>
                    <a class="dropdown-item" href={`${config.university_url}`}>Universities</a></div>
                </div>
              }
            </NavItem>
            <NavItem className="d-md-down-none foe-login-btn">
              <a href="/#/login" className="nav-link">Login</a>
            </NavItem>
            {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          </Nav>
          <AppAsideToggler className="d-md-down-none d-none" />
          {/*<AppAsideToggler className="d-lg-none" mobile />*/}
        </Container>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
