import React, { Component } from 'react';
import { Link  , Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import backarrow from "../../../assets/img/back_arrow.svg";
import llogo from '../../../assets/img/brand/university-logo.svg';
import config from '../../../config.json';



class Login extends Component {

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
   
    const data = {
           
			  email : this.state.email,
              password : this.state.password
        
		}
		
            // console.log(products);
		 
		   const post = axios.post('https://formeeadmin.bicsglobal.com/checkuniversity', data).then((response) => {
                     //alert(response);
               // this.props.history.push('/clients/view');
               // toast.success("Updated successfully!..");

            });



		
	this.setState({ email: '' });
	this.setState({ password: '' });
	this.setState({ errors: '' }); 
	
	
	}
	
	render() {
	const { errors } = this.state;
    return (
      <div className="app flex-row align-items-center login-bg" >
        <div className="w-100 px-0">
        <a className="back-btn mr-3 ml-5" href={`${config.own_url}`}>
                <Button  className="px-0 btn-transparent">
                  <span className="pr-1">
                    {" "}
                    <img src={backarrow} alt="" />
                  </span>{" "}
                  <span className="align-middle">Back </span>
                </Button>
              </a>
        <div className="mx-auto login-bos text-center mt-5 pt-5">
        <img src={llogo} alt="formee-logo"  className="login-logo" />
          </div>
        <div className="foe-service-block gray-bg mb-5">
          <Container>
            <Row>
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-block-2">
                <div className="foe-service-header my-5">

                  

                  <p className="foe-card-title mx-auto login-content">Welcome to Formee Express Select your <span  className="font-600">account</span> to login!</p>
                   
                </div>
              </div>
              <div className="row col-md-12">
                <div className="foe-about-boxx mb-4">
                  <div className="row w-100 pb-5 d-flex justify-content-center">
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={`${config.student_url}`}>
                     <button className="btn service-btn f-white btn-std">
                       <span>STUDENT PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					<a href={`${config.agent_url}`} >
                    <button className="btn service-btn f-white btn-univ">
                       <span>PREFERRED<br/> PARTNER PORTAL</span>
                     </button> </a>
                    </div>
                    <div className="col-md-4 colxl-4 col-md-4 col-12 foe-top-1 foe-subject">
					 <a href={`${config.university_url}`} >
                    <button className="btn service-btn f-white btn-agent">
                     <span>UNIVERSITY PORTAL</span>
                     </button></a>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
