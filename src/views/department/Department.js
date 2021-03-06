import React, { Component } from 'react';
import { Link  , Redirect , withRouter } from 'react-router-dom';
import { Button, Card, CardBody,CardHeader,ListGroup ,ListGroupItem, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


class Department extends React.Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
		heading :'',
		sub_heading : '',
		description : '',
		category_id : '',
		faculty_id : '',
		teams: [],
		schemas: [],
	   schemas_id: [],
	   fach: [],
	   faci: [],
	   cath: [],
	   cati: [],
		selectedTeam: "",
		validationError: "",
		planets: [],
		errors:{}
    };
	axios.get('https://formeeadmin.bicsglobal.com/get_departments').then(response => {
		
         this.setState({
                   schemas: response.data.heading,
                   schemas_id: response.data.id,
                   schemas_res: response.data.res,
				   fach: response.data.fach,
                   faci: response.data.faci,
                   cath: response.data.cath,
                   cati: response.data.cati
               });
        })
	
	/*
	axios.get('https://formeeadmin.bicsglobal.com/showfaculty/1').then(response => {
         this.setState({
                   schemas: response
               });
        })
		*/
  }
  
 

  
handleHeadingChange = event => {
	this.setState({heading: event.target.value});
}

handleSubHeadingChange = event => {
	this.setState({sub_heading: event.target.value});
}

handleDescriptionChange = event => {
	this.setState({description: event.target.value});
}
handleCategoryChange = event => {
	this.setState({category_id: event.target.value});
}

handleFacultyChange = event => {
	this.setState({faculty_id: event.target.value});
}


validate = () => {
     const errors = {};
	 if(this.state.heading.trim() === '')
		{
			errors.heading = 'Heading is required';
		}
		if(this.state.sub_heading.trim() === '')
		{
			errors.sub_heading = 'Sub Heading is required';
		}
		if(this.state.description.trim() === '')
		{
			errors.description = 'Description is required';
		}
		if(this.state.category_id.trim() === '')
		{
			errors.category_id = 'category is required';
		}
		if(this.state.faculty_id.trim() === '')
		{
			errors.faculty_id = 'Faculty is required';
		}
   	 return Object.keys(errors).length === 0 ? null : errors;
};



 onSubmit = e => {
   e.preventDefault()
   
	const errors = this.validate();
	this.setState({ errors });
	if (errors) return;
   
    const products = {
           
			  sub_heading : this.state.sub_heading,
              heading : this.state.heading,
              description : this.state.description,
              category_id : this.state.category_id,
              faculty_id : this.state.faculty_id,
              program_coordinator_id : 1,
              university_id : 1
        
		}
		
             console.log(products);
		  let uri = 'https://formeeadmin.bicsglobal.com/store_department';
       // alert(" successfully !..");
      const post = axios.post(uri, products).then((response) => {
      if(response.data.status_code =="200")
	  {
		  alert(response.data.message);
		  //this.props.history.push("/department")
		  window.location.reload();
	  }
	  else
	  {
		alert(response.data.message);  
	  }
      });
		
	this.setState({ heading: '' });
	this.setState({ sub_heading: '' });
	this.setState({ description: '' });
	this.setState({ category_id: '' });
	this.setState({ faculty_id: '' });
	this.setState({ errors: '' }); 
	
	
	}
	
	render() {
	const { errors } = this.state;
	let links = this.state.schemas_res
	console.log(links);
    return (
      <div className="app flex-row align-items-center login-bg" >
        <Container>

          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="custom_group">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Department</h1>
                      <p className="text-muted">Add Department</p>
					 
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                         
                        </InputGroupAddon>
                        <Input type="text" name="heading" placeholder="Heading" value={this.state.heading} onChange={this.handleHeadingChange} />
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.heading}</h6>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                         
                        </InputGroupAddon>
                        <Input type="text" name="sub_heading" placeholder="Sub Heading" value={this.state.sub_heading} onChange={this.handleSubHeadingChange}/>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.sub_heading}</h6>
					  <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">                         
                        </InputGroupAddon>
                       <textarea rows="3" cols="100" width="100%" name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.description}</h6>
					  
					  <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="select" name="category_id" id="SelectLm" bsSize="sm"  onChange={this.handleCategoryChange}>
                        <option value="0">select Category</option>
                        {this.state.cath.map((schema, index) => ( 
                        <option value={ this.state.cati[index] }>{ schema }</option>
                          ))}
                      </Input>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.category_id}</h6>
					  
					  
					  <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="select" name="faculty_id" id="SelectLm" bsSize="sm"  onChange={this.handleFacultyChange}>
                        <option value="0">select Faculty</option>
						{this.state.fach.map((schema, index) => ( 
                        <option value={ this.state.faci[index] }>{ schema }</option>
                          ))}
                      </Input>
                      </InputGroup>
					  <h6 style={{color: 'red'}}>{errors.faculty_id}</h6>
					  
					  
					   <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                         
                        </InputGroupAddon>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary"  type="submit" onClick={this.onSubmit.bind(this)} className="px-4">Save</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                
              </CardGroup>
            </Col>
			
			<Card>
					  <CardHeader>
						<i className="fa fa-align-justify"></i><strong>Department Lists</strong>
						<div className="card-header-actions">
						 
						</div>
					  </CardHeader>
					  <CardBody>
						<ListGroup>
						  <ListGroupItem>hi</ListGroupItem>
						   {this.state.schemas.map((schema, index) => ( 
						  <ListGroupItem>{ schema }</ListGroupItem>
						    ))}
						</ListGroup>
					  </CardBody>
					</Card>
					
					
					
			
          </Row>
        </Container>
      </div>
    );
  }
}

export default Department;
