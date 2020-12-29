import React, { Component } from 'react';
import { Link  , Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class Category extends Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
	  email :'',
	  password : '',
	  errors:{}
    };
  }


  
handleEmailChange = event => {
	this.setState({email: event.target.value});
}

handlePasswordChange = event => {
	this.setState({password: event.target.value});
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
	 if(this.state.password.trim() === '')
		{
			errors.password = 'Password is required';
		}
   	 return Object.keys(errors).length === 0 ? null : errors;
};



 onSubmit = e => {
   e.preventDefault()
   
	const errors = this.validate();
	this.setState({ errors });
	if (errors) return;
   
    const products = {
           
			  email : this.state.email,
              password : this.state.password
        
		}
		
             console.log(products);
		 
		 
		  let uri = 'https://formeeadmin.bicsglobal.com/api/task/';
       // alert(" successfully !..");
      const post = axios.post(uri, products).then((response) => {
      alert(response.data);
      });
	  
	  
		


		
	this.setState({ email: '' });
	this.setState({ password: '' });
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
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.email}</h6>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.password}</h6>
					   <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                         
                        </InputGroupAddon>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.remember_password}</h6>
                      <Row>
                        <Col xs="6">
                          <Button color="primary"  type="submit" onClick={this.onSubmit.bind(this)} className="px-4">Login</Button>
                        </Col>
						{/* <Col xs="6" className="text-right">
						<Link to="/forgot">
                          <Button color="link" className="px-0">Forgot password?</Button>
						   </Link>
                        </Col>  */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
						{<Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
						</Link>}
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
