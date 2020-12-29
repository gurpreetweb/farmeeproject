import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import axios from 'axios';

//API Base Url
function submitForm(contentType, data, setResponse, path) {
  axios({
  url: `https://formeeadmin.bicsglobal.com/storeaboutus`,
  method: 'POST',
  data: data,
  headers: {
    'Content-Type': contentType
  }
  }).then((response) => {
  setResponse(response.data);
  }).catch((error) => {
  setResponse("error");
  })
}

class Profileaboutus extends Component {
  constructor(props) {
    super(props);
    const errors = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
	  formData: new FormData(),
	  upload_photo: [],
	   errors: {
        location: '',
        totalstudents: '',
        estimatedcost: '',
        fileLength: '',
        funding: ''
      },
    };
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleTotalstudentsChange = (event) => {
    this.setState({ totalstudents: event.target.value });
  };

  handleEstimatedcostChange = (event) => {
    this.setState({ estimatedcost: event.target.value });
  };

  handleDropdownChange = (event) => {
    this.setState({ selecttype: event.target.value });
  };

  handleDropdownChange1 = (event) => {
    this.setState({ funding: event.target.value });
  };
  
  onFileChange = (event) => {
		// this.setState({
		// 	upload_photo: event.target.files[0]
    // });
    
    this.setState({fileLength: event.target.files.length});

    if(event.target.files.length < 3 ){
      for(let i = 0; i < event.target.files.length; i++) {
        this.state.formData.append('upload_photo[]', event.target.files[i], event.target.files[i].name);
        // this.setState({
        //   upload_photo: event.target.files[i]
        // });
      }
    }
  }
  
validate = () => {
  const errors = {};
	if(this.state.location === '')
	{
	  errors.location = 'Description is required';
	   this.setState({ errors });
  }
  if(this.state.totalstudents === '')
	{
		errors.totalstudents = 'Total students is required';
  }
  if(this.state.estimatedcost === '')
  {
    errors.sports_facilities = "Select estimated cost";
  }
  if(this.state.funding === '')
  {
    errors.funding = "Funding is required";
  }
  if(this.state.fileLength > 2){
    errors.fileLength = "Maximum 2 Files Only Allowed to Upload";
  }
 
};
  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    /*const products = {
      location: this.state.location,
      totalstudents: this.state.totalstudents,
      funding: this.state.funding,
      selecttype: this.state.selecttype,
      estimatedcost: this.state.estimatedcost,
    }; */
	
  	this.state.formData.append("location", this.state.location);
    // formData.append("upload_photo", this.state.upload_photo, this.state.upload_photo.name);
    this.state.formData.append("totalstudents", this.state.totalstudents);
    this.state.formData.append("funding", this.state.funding);
    this.state.formData.append("selecttype", this.state.selecttype);
    this.state.formData.append("estimatedcost", this.state.estimatedcost);

    submitForm("multipart/form-data", this.state.formData, (msg) => console.log(msg), 'university');

    //console.log(products);

    // const post = axios.post('https://formeeadmin.bicsglobal.com/storeaboutus', products).then((response) => {
    // alert(response);
    // //this.props.history.push('/clients/view');
    // //toast.success("Updated successfully!..");
    // });

   
  };

  render() {
    return (
      <div className="animated fadeIn gray-bg-300">
        <Container>
          <Row>
            <Col xs="12" sm="4" xl="4" md="4" lg="4" className="uni-no-padd">
              <Card className="uni-left-card">
                <CardBody>
                  <Row></Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="8" xl="8" md="8" lg="8" className="uni-no-padd">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                   about
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    Facilities
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#messages"
                    role="tab"
                  >
                    Campuses
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    Entry Requirements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                  >
                  Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                  >
                    Reviews
                  </a>
                </li>
                
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">
                  <Card className="uni-right-card">
                    <CardHeader>
                      <strong>Description</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup className="uni-para-content">
                       <textarea type="text" name="message" placeholder="Enter message" cols={100} rows={10} value={this.state.message} onChange={this.handleMessageChange} />
                      </FormGroup>
                      <FormGroup row className="my-0">
                        <Col xs="4">
                          <FormGroup>
                            <Label className="uni-label" htmlFor="city">ADD LOCATION</Label>
                            <Input
                              type="text"
                              id="location"
                              placeholder="Enter your location"
                              value={this.state.location}
                              onChange={this.handleLocationChange}
                            />
                          </FormGroup>
						  <h6 style={{color: 'red'}}>{this.state.errors.location}</h6>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label className="uni-label" htmlFor="postal-code">FUNDING TYPE</Label>
                              <div class="btn-group">
                                  <button type="button" class="btn btn-secondary">Public</button>
                                  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-expanded="false" data-reference="parent">
                                   <i class="fa fa-angle-down"></i>
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    <a class="dropdown-item" href="#">Private</a>
                                    <a class="dropdown-item" href="#">Trust</a>
                                  
                                  </div>
                            </div>
                            <Input
                              type="select"
                              name="funding"
                              id="funding"
                              onChange={this.handleDropdownChange1}
                            >
                              <option value="public">Public</option>
                              <option value="private">Private</option>
                              <option value="trust">Trust</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                       
                          <FormGroup>
						  <h6 style={{color: 'red'}}>{this.state.errors.funding}</h6>
                            <Label className="uni-label" htmlFor="postal-code">NO. OF STUDENTS</Label>
                            <Input
                              type="number"
                              id="totalstudents"
                              value={this.state.totalstudents}
                              onChange={this.handleTotalstudentsChange}
                            />
                          </FormGroup>
						  <h6 style={{color: 'red'}}>{this.state.errors.totalstudents}</h6>
                          <div className="number-input">
  
  <input className="quantity" min="0" name="quantity" value="10.369" type="number" />
  <div className="quantity-box">
  <button className="plus" > <i class="fa fa-angle-down"></i></button>
  <button  className="minus"> <i class="fa fa-angle-up"></i></button>
  </div>
</div>
                        </Col>
                      </FormGroup>
                      <Label htmlFor="city">ESTIMATED LIVING COST</Label>
                      <FormGroup row className="my-0">
                        <Col xs="2">
                          <FormGroup>
                            <Input
                              type="text"
                              id="city"
                              value={this.state.estimatedcost}
                              onChange={this.handleEstimatedcostChange}
                            />
                          </FormGroup>
						  <h6 style={{color: 'red'}}>{this.state.errors.estimatedcost}</h6>
                        </Col>
                        <Col xs="2">
                          <FormGroup>
                            <FormGroup>
                              <Input
                                type="select"
                                name="selecttype"
                                id="selecttype"
                                onChange={this.handleDropdownChange}
                              >
                                <option value="permonth">Per month</option>
                                <option value="peryear">Per year</option>
                              </Input>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="file-multiple-input">
                            Multiple File input
                          </Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="file" accept="image/*" multiple onChange={this.onFileChange} name="upload_photo[]" />
                        </Col>
                      </FormGroup>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={this.onSubmit.bind(this)}
                        className="px-4"
                      >
                        SAVE
                      </Button>
                    </CardBody>
                  </Card>
                </div>
                <div className="tab-pane" id="profile" role="tabpanel">
                  ..3.
                </div>
                <div className="tab-pane" id="messages" role="tabpanel">
                  ..3.
                </div>
                <div className="tab-pane" id="settings" role="tabpanel">
                  ..4.
                </div>
                <div className="tab-pane" id="contact" role="tabpanel">
                  ..5.
                </div>
                <div className="tab-pane" id="review" role="tabpanel">
                  ..6.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profileaboutus;
