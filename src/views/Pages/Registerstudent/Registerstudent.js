import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal,Form, Input, InputGroup, ModalBody,InputGroupAddon, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
//import Select from 'react-select';
//import countryList from 'react-select-country-list';

class Registerstudent extends Component {

  constructor(props) {
    super(props);
	//this.options = countryList().getData()
	//this.options1 = countryList().getData()
    this.state = {
      large: false,
	  errors:{},
	  country:[],
	  studentcountry:'',
	  citizen:'',
	  nationality:'',
	  firstname:'',
	  email:'',
	  lastname:'',
	  password:'',
	  studentselectcountry:'',
	  year:'',
	  agree:'',
	  subject:'',
	  options: this.options,
	  options1: this.options1,
	  selectedIndex: 0,

    };
	
	
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.step1validate = this.step1validate.bind(this);
    this.step2validate = this.step2validate.bind(this);
    this.step3validate = this.step3validate.bind(this);
    this.step4validate = this.step4validate.bind(this);
    this.handleSelect1 = this.handleSelect1.bind(this);
    this.handleButtonClick1 = this.handleButtonClick1.bind(this);
    this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlercountry = this.changeHandlercountry.bind(this);
	  
	  axios.get('https://formeeadmin.bicsglobal.com/get_country').then(response => {
		console.log(response);
		//this.setState({data: [...json]});
         this.setState({
                  country : response.data,
               });
        }) 
	
  }


 changeHandler = value => {
    this.setState({ value })
  }
  
  changeHandlercountry = value1 => {
    this.setState({ value1 })
  }
  
  
  handleSelect1 = index => {
    this.setState({ selectedIndex: index });
  };
  
  handleButtonClick1 = () => {
    this.setState({ selectedIndex: 0 });
  };
  
  handleButtonClick2 = () => {
    this.setState({ selectedIndex: 1 });
  };
 
  
  toggleLarge() {
    this.setState({
      large: !this.state.large,
	  
    });
  }
  
 
  
  step1validate(){
	   
	    const errors = {}; 
	    if(this.state.studentcountry === ''){
		errors.studentcountry = 'Country is required';
		}else if(this.state.citizen === ''){
	    errors.citizen = 'Please select';
		}else if(this.state.nationality === ''){
		errors.nationality = 'Nationality is required';	
		}else{
		this.setState({ selectedIndex: 1 });	
		}
		
		this.setState({ errors });
  }
  
   step2validate(){
	  
		const errors = {}; 
	    if(this.state.firstname.trim() === ''){
		errors.firstname = 'Firstname is required';
	    }else if(this.state.email.trim() === ''){
		errors.email = 'Email is required';
	    }else if(this.state.lastname.trim() === ''){
		errors.lastname = 'Lastname is required';
	    }else if(this.state.password.trim() === ''){
		errors.password = 'Password is required';
		}else{
		this.setState({ selectedIndex: 2 });	
		}
	    this.setState({ errors });
  }
  
   step3validate(){
	   
		const errors = {}; 
	    if(this.state.studentselectcountry === ''){
		errors.studentselectcountry = 'Please select';
	    }else if(this.state.year === ''){
		errors.year = 'Please Select';
		}else if(this.state.subject === ''){
		errors.subject = 'Please Select';
		}else{
		this.setState({ selectedIndex: 3 });	
		}
	    this.setState({ errors });
  }
  
   step4validate(){
	   
		const errors = {}; 
	    if(this.state.agree.trim() === ''){
		errors.agree = 'Please select';
	    } else{
		this.onSubmit();	
		}
	    this.setState({ errors });
  }
  
handleCitizenChange = event => {
	this.setState({citizen: event.target.value});
}

handleNationalityChange = event => {
	this.setState({nationality: event.target.value});
}

handleFnameChange = event => {
	this.setState({firstname: event.target.value});
}


handleEmailChange = event => {
	this.setState({email: event.target.value});
}

handleLastnameChange = event => {
	this.setState({lastname: event.target.value});
}

handleYearChange = event => {
	this.setState({year: event.target.value});
}

handlePasswordChange = event => {
	this.setState({password: event.target.value});
}

handleNewletterChange = event => {
	this.setState({newsletter: event.target.value});
}

handlePartnerChange = event => {
	this.setState({partner: event.target.value});
}

handleAgreeChange = event => {
	this.setState({agree: event.target.value});
}

handleSubjectChange = event => {
	this.setState({subject: event.target.value});
}
 
handleStudentselectcountryChange = event => {
	this.setState({studentselectcountry: event.target.value});
}

handleStudentcountryChange = event => {
	this.setState({studentcountry: event.target.value});
}




onSubmit() {
   //e.preventDefault()
		 
   
	
	 
	 axios.post(
				'https://formeeadmin.bicsglobal.com/storestudent',
					{
    citizen : this.state.citizen,
    nationality : this.state.nationality,
    firstname : this.state.firstname,
    email : this.state.email,
    lastname : this.state.lastname,
    password : this.state.password, 
    newsletter : this.state.newsletter,
    partner : this.state.partner,
    agree : this.state.agree,
    subject : this.state.subject,
    studentcountry : this.state.studentcountry,
    studentselectcountry : this.state.studentselectcountry,
    year : this.state.year
					}
				)

				.then(function(response) {
				 alert("Registered successfully");
				 window.location = '/#/registerstudent';
				//toast.success("Manage contact updated successfully");
				
				})
				.catch(function(error) {
				//toast.success("Error occured");
				})
				
   //console.log(products);
}
    
  render() {
	const { errors } = this.state;
  console.log(this.state.country);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
              <CardBody>
               
                <Button onClick={this.toggleLarge} className="mr-1">Sign Up</Button>
                <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                       className={'modal-lg ' + this.props.className}>
                  <ModalBody>
				    <Form>
					<Tabs selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect1} >
					<TabList>
					<Tab className="step1">Step 1</Tab>
					<Tab className="step2">Step 2</Tab>
					<Tab className="step3">Step 3</Tab>
					<Tab className="step4">Step 4</Tab>
					</TabList>
					
					<TabPanel className="step1">
					        <label>Country of your residence</label>
							<InputGroup className="mb-5">
							<InputGroupAddon addonType="prepend">
							</InputGroupAddon>
							<Input type="select" name="studentcountry" id="studentcountry" onChange={this.handleStudentcountryChange}>
							<option value="">Select Country</option> 
							 { this.state.country.map(user => <option value={user.id} selected={this.state.studentcountry}>{user.country_name}</option> )}	
                             </Input>
							</InputGroup>
							 <h6 style={{color: 'red'}}>{errors.studentcountry}</h6>
							 
							<label>Is this your country of citizenship?</label>
							<div onChange={this.handleCitizenChange} >
							<input type="radio" checked={this.state.citizen === "yes"} value="yes" name="yes"/> Yes
							<input type="radio" checked={this.state.citizen === "no"} value="no" name="no"/> No
							</div>
                            <h6 style={{color: 'red'}}>{errors.citizen}</h6>
							
                             <label>Your Nationality</label>
							<InputGroup className="mb-3">
							<InputGroupAddon addonType="prepend">
							</InputGroupAddon>
							<Input type="select" name="nationality" id="nationality" value={this.state.nationality} onChange={this.handleNationalityChange}>
							<option value="">Select</option>
							<option value="1">Indian</option>
							<option value="2">Christian</option>
							</Input>
							</InputGroup>
							 <h6 style={{color: 'red'}}>{errors.nationality}</h6>
							
						    <ModalFooter>
							<Button onClick={this.step1validate}>START</Button>
							</ModalFooter>
					</TabPanel>
							
					<TabPanel className="step2">
					    
							<div className="container">
							<span>Your details</span>
							<div className="row">
							
							   
								<div className="col-sm">
								<label>First name</label>
								<InputGroup className="mb-3">
								<InputGroupAddon addonType="prepend">
								</InputGroupAddon>
								<Input type="text" name="firstname" placeholder="Type here" value={this.state.firstname} onChange={this.handleFnameChange} />
								</InputGroup>
								<h6 style={{color: 'red'}}>{errors.firstname}</h6>

                               <label>Email address</label>
								<InputGroup className="mb-3">
								<InputGroupAddon addonType="prepend">
								</InputGroupAddon>
								<Input type="email" name="email" placeholder="Type here" value={this.state.email} onChange={this.handleEmailChange} />
								</InputGroup>
								 <h6 style={{color: 'red'}}>{errors.email}</h6>
								</div>
								
								
								<div className="col-sm">
								<label>Last name</label>
								<InputGroup className="mb-3">
								<InputGroupAddon addonType="prepend">
								</InputGroupAddon>
								<Input type="text" name="lastname" placeholder="Type here" value={this.state.lastname} onChange={this.handleLastnameChange} />
								</InputGroup>
								<h6 style={{color: 'red'}}>{errors.lastname}</h6>
								
                              

                                <label>Password</label>
								<InputGroup className="mb-3">
								<InputGroupAddon addonType="prepend">
								</InputGroupAddon>
								<Input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} />
								</InputGroup>	
								<h6 style={{color: 'red'}}>{errors.password}</h6>
								</div>

							</div>
							</div>
							
							<ModalFooter>

							<Button color="primary" onClick={this.handleButtonClick1} className="px-4">BACK</Button>
						    <Button color="secondary" onClick={this.step2validate}>NEXT</Button>
							</ModalFooter>
						 
					</TabPanel>
					
					<TabPanel className="step3">
					    
							<div className="container">
							<span>I'm interested in</span>
							<div className="row">
							
							   
								<div className="col-sm">
								<label>Where do you want to study?</label>
								<InputGroup className="mb-3">
								<Input type="select" name="studentselectcountry" id="studentselectcountry" onChange={this.handleStudentselectcountryChange}>
								<option value="">Select Country</option> 
							    { this.state.country.map(studentselectcountry => <option value={studentselectcountry.id}>{studentselectcountry.country_name}</option> )}	
                                </Input>
							    </InputGroup>
								<h6 style={{color: 'red'}}>{errors.studentselectcountry}</h6>
								
								 
								<div onChange={this.handleYearChange}>
								<input type="radio" checked={this.state.year === "2020"} value="2020"/> 2020
								<input type="radio" checked={this.state.year === "2021"} value="2021"/> 2021
								<input type="radio" checked={this.state.year === "2022"} value="2022"/> 2022
								<input type="radio" checked={this.state.year === "2023"} value="2023"/> 2023
								</div>
								<h6 style={{color: 'red'}}>{errors.year}</h6>

								</div>
								
								
								<div className="col-sm">
								<label>What do you want to study?</label>
								<InputGroup className="mb-3">
								<InputGroupAddon addonType="prepend">
								</InputGroupAddon>
								<Input type="select" name="subject" id="subject" onChange={this.handleSubjectChange}>
								<option value="">Select</option>
								<option value="1">MBBS</option>
								<option value="2">BDS</option>
								<option value="3">BE</option>
								<option value="4">ME</option>
								<option value="5">BSC</option>
								</Input>
								</InputGroup>
								<h6 style={{color: 'red'}}>{errors.subject}</h6>
								</div>

							</div>
							</div>
							
							<ModalFooter>
							<Button color="primary" onClick={this.handleButtonClick2} className="px-4">BACK</Button>
						    <Button color="secondary" onClick={this.step3validate}>NEXT</Button>
							</ModalFooter>
						 
					    </TabPanel>		
					
						<TabPanel className="step4">
						    <span>GET EMAIL UPDATES to stay informed (Optional)</span>
							
							 
							<div onChange={this.handleNewletterChange}>
							<input type="radio" value="1" name="yes"/> Newsletters
                           Top tips including visa and scholarship information from our in-house experts
							</div>
							
							<div onChange={this.handlePartnerChange}>
							<input type="radio" value="1" name="yes"/> University and partner updates
Emails on behalf of universities and carefully selected third-party partners
							</div>
							
							<div onChange={this.handleAgreeChange}>
							<input type="radio" value="1" name="yes"/> I confirm I am over 16 and I agree to Formee Express Terms and Conditions & Privacy Notice.
							</div>
                            <h6 style={{color: 'red'}}>{errors.agree}</h6>
							
						    <ModalFooter>
							{/*<Button color="primary"  type="submit" onClick={this.onSubmit.bind(this)} className="px-4">Register</Button> */}
							<Button color="primary" onClick={this.step4validate} >Register</Button> 
							</ModalFooter>
					</TabPanel>
					
					    </Tabs>
					 </Form>
                  </ModalBody>
                
                </Modal>

              </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Registerstudent;
