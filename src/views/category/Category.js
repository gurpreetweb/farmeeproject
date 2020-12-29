import React, { Component } from 'react';
import { Link  , Redirect , withRouter } from 'react-router-dom';
import { Button, Card, CardBody,CardHeader,ListGroup ,ListGroupItem, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';



class Category extends Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
	  heading :'',
	  sub_heading : '',
	  description : '',
	   schemas: [],
	   schemas_id: [],
    selectedTeam: "",
    validationError: "",
	planets: [],
	  errors:{}
    };
	
	
	axios.get('https://formeeadmin.bicsglobal.com/get_categories').then(response => {
		console.log(response);
         this.setState({
                   schemas: response.data.heading,
                   schemas_id: response.data.id
               });
        })
		
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
              program_coordinator_id : 1,
              university_id : 1
        
		}
		
		  let uri = 'https://formeeadmin.bicsglobal.com/store_category';
       // alert(" successfully !..");
      const post = axios.post(uri, products).then((response) => {
      if(response.data.status_code =="200")
	  {
		  alert(response.data.message);
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
	this.setState({ errors: '' }); 
	
	
	}
	componentDidMount() {
    fetch('https://formeeadmin.bicsglobal.com/get_categories')
      .then(response => response.json())
      .then(json => this.setState({ users: json.data }));
  }
	
	render() {
	const { errors } = this.state;
	console.log(this.state.schemas);
    return (
      <div className="app flex-row align-items-center login-bg" >
        <Container>

          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="custom_group">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Category</h1>
                      <p className="text-muted">Add Category</p>
					 
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
						<i className="fa fa-align-justify"></i><strong>List Categories</strong>
						<div className="card-header-actions">
						  
						</div>
					  </CardHeader>
					  <CardBody>
						<ListGroup>
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

export default Category;
