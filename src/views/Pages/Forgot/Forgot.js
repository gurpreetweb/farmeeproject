import React, { Component } from 'react';
import { Link  , Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
//import Register from '../Register/Register';


class Studentforgot extends Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
	  email :'',
	  errors:{}
    };
  }


  
handleEmailChange = event => {
	this.setState({email: event.target.value});
}


validate = () => {
     const errors = {};
	 if(this.state.email.trim() === '')
		{
		errors.email = 'Email is required';
		}else{	
		 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	     const email = this.state.email;
		 if(!email.match(re)) {
		 errors.email = 'Invalid email';
         //return false;
		 }
	 }
	
   	 return Object.keys(errors).length === 0 ? null : errors;
};



 onSubmit = e => {
   e.preventDefault()
   
	const errors = this.validate();
	this.setState({ errors });
	if (errors) return;
   
    const data = {
           
			  email : this.state.email,
              type : "student"
		}
		
            // console.log(products);
		 
		   const post = axios.post('https://formeeadmin.bicsglobal.com/checkemail', data).then((response) => {
                     //alert(response);
               // this.props.history.push('/clients/view');
               // toast.success("Updated successfully!..");

            });



		
	this.setState({ email: '' });
	this.setState({ errors: '' }); 
	
	
	}
	
	render() {
	const { errors } = this.state;
    return (
      <div className="app flex-row align-items-center login-bg" >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="custom_group">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Forgot</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.email}</h6>
                      <Row>
                        <Col xs="6">
                          <Button color="primary"  type="submit" onClick={this.onSubmit.bind(this)} className="px-4">Login</Button>
                        </Col>
						
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
               
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Studentforgot;
