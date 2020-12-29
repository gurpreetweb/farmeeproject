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
} from 'reactstrap';

import Aboutus_Banner from './Aboutus_Banner/index';
import About_Block_1 from './About_Block_1/index';
import About_Block_2 from './About_Block_2/About_Block_2';

class Aboutus extends Component {
  constructor(props) {
    super(props);
	
  }
  render() {

    return (
      <div className="animated fadeIn">
        <Aboutus_Banner />
        <About_Block_2 />
        <About_Block_1 />
      </div>
    );
  }
}

export default Aboutus;
