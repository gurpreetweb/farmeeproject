import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, ListGroup ,ListGroupItem, Col, Modal,Form, Input, InputGroup, ModalBody,InputGroupAddon, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

class Registerstudent extends Component {

  constructor(props) {
    super(props);
	
    this.state = {
      large: false,
	  email:'',
	  heading:'',
	  phone:'',
	  contact:[],
	  errors:{},
	  
    };
	
	this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
	 
	 axios.get('https://formeeadmin.bicsglobal.com/get_contact').then(response => {
		console.log(response);
		//this.setState({data: [...json]});
         this.setState({
                  contact: response.data,
               });
        })
	
  }

 
  
  toggleLarge() {
    this.setState({
      large: !this.state.large,
	  
    });
  }
 
validate() {
     const errors = {};
	 if(this.state.heading.trim() === ''){
	 errors.heading = 'Heading is required';
	 }else if(this.state.phone.trim() === ''){
	 errors.phone = 'Phone number is required';
	 }else if(this.state.email.trim() === ''){
	 errors.email = 'Email is required';
     }else{
		this.onSubmit(); 
	 }  
	 
	 
   	 this.setState({ errors });
};
 
 
handleHeadingChange = event => {
	this.setState({heading: event.target.value});
}

handlePhoneChange = event => {
	this.setState({phone: event.target.value});
}

handleEmailChange = event => {
	this.setState({email: event.target.value});
}


onSubmit() {
  // e.preventDefault()

   
   var heading = this.state.heading;
   var phone = this.state.phone; 
   var email = this.state.email;
  
   
       axios.post(
				'https://formeeadmin.bicsglobal.com/storecontact',
					{
					heading: heading,
					phone:phone,
					email: email
					}
				)

				.then(function(response) {
				 alert("Saved successfully")	 
				 window.location.reload();
				
				//
				
				
				})
				.catch(function(error) {
				//toast.success("Error occured");
				})

   
  
}
    
  render() {
	const { errors } = this.state;
	console.log(this.state.contact);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
              <CardBody>
               
                <Button onClick={this.toggleLarge} className="mr-1">Add contacts</Button>
                <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                       className={'modal-lg ' + this.props.className}>
                  <ModalBody>
				    <Form>
					
					
					        <label>Institute name</label>
							<InputGroup className="mb-3">
							<InputGroupAddon addonType="prepend">
							</InputGroupAddon>
							<Input type="text" name="heading" placeholder="Enter heading" value={this.state.heading} onChange={this.handleHeadingChange} />
							</InputGroup>
							 <h6 style={{color: 'red'}}>{errors.heading}</h6>

					        <label>Phone number</label>
							<InputGroup className="mb-3">
							<InputGroupAddon addonType="prepend">
							</InputGroupAddon>
							<Input type="text" name="phone" placeholder="Enter Phone number" value={this.state.phone} onChange={this.handlePhoneChange} />
							</InputGroup>
							 <h6 style={{color: 'red'}}>{errors.phone}</h6>
							 
							<label>Email</label>
							<InputGroup className="mb-3">
							<InputGroupAddon addonType="prepend">
							</InputGroupAddon>
							<Input type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
							</InputGroup>
							 <h6 style={{color: 'red'}}>{errors.email}</h6>
							 
						    <ModalFooter>

							<Button color="primary" onClick={this.validate}>SAVE</Button>
							</ModalFooter>
					
					 </Form>
                  </ModalBody>
                </Modal>
                          
				{this.state.contact.map( ( {id, heading , email ,phone} ) => {
				return  <p key={id}>{heading} - {email} - {phone}</p>
				})	}
							
                             
              </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Registerstudent;
