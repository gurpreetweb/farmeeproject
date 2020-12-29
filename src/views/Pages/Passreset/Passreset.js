import React, { Component } from 'react';
import { Link  , Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
//import Register from '../Register/Register';


class Passreset extends Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
	  password :'',
	  cpassword : '',
	  errors:{}
    };
  }


  
handlePasswordChange = event => {
	this.setState({password: event.target.value});
}

handleCpasswordChange = event => {
	this.setState({cpassword: event.target.value});
}



 onSubmit = e => {
   e.preventDefault()
   
	const errors = this.validate();
	this.setState({ errors });
	if (errors) return;
   
    const data = {
           
			  password : this.state.password,
              cpassword : this.state.cpassword
        
		}
		
            // console.log(products);
		   const post = axios.post('https://formeeadmin.bicsglobal.com/resetpassword', data).then((response) => {
                     //alert(response);
               // this.props.history.push('/clients/view');
               // toast.success("Updated successfully!..");

            });



		
	this.setState({ password: '' });
	this.setState({ cpassword: '' });
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
                      <h1>Forgot Password</h1>
                      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.email}</h6>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="cpassword" value={this.state.cpassword} onChange={this.handleCpasswordChange}/>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.cpassword}</h6>
					   <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                         
                        </InputGroupAddon>
                      </InputGroup>
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

export default Passreset;
