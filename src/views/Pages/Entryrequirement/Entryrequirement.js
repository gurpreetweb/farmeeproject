import React, { Component } from 'react';
import { Link  , Redirect } from 'react-router-dom';
import { Label, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

//API Base Url
const API_BASE = "https://formeeadmin.bicsglobal.com/api";

function submitForm(contentType, data, setResponse, path) {
  axios({
  url: `${API_BASE}/${path}`,
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


class Entryrequirement extends Component {

  constructor(props) {
    super(props);

	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      layout: 'normal',
      university_id: 1,
      description:'',
      url: '',
      upload_photo: [],
      fileLength: '',
      errors: {
        description: '',
        url: '',
        fileLength: ''
      },
      formData: new FormData()
    };

  }

  onFileChange = (event) => {
		// this.setState({
		// 	upload_photo: event.target.files[0]
    // });
    this.setState({fileLength: event.target.files.length});
    if(event.target.files.length < 3 ){
      for(let i = 0; i < event.target.files.length; i++) {
        this.state.formData.append('upload_photo[]', event.target.files[i], event.target.files[i].name);
      }
    }
	}
  
  handleDescriptionChange = event => {
    this.setState({description: event.target.value});
  }

  handleurlChange = event => {
    this.setState({url: event.target.value});
  }

validate = () => {
  const errors = {};
	if(this.state.description.trim() === '')
	{
	  errors.description = 'Description is required';
  }
	if(this.state.url.trim() === '')
	{
		errors.url = 'URL is required';
  }
  if(this.state.fileLength > 2){
    errors.fileLength = "Maximum 2 Files Only Allowed to Upload";
  }
  return Object.keys(errors).length === 0 ? null : errors;
};

  onSubmit = e => {
    e.preventDefault()
   
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
   
    
    this.state.formData.append("university_id", this.state.university_id);
    this.state.formData.append("layout", this.state.layout);
    this.state.formData.append("description", this.state.description);
    this.state.formData.append("url", this.state.url);


    submitForm("multipart/form-data", this.state.formData, (msg) => {alert(msg.message);}, 'entryrequirement');
    
    // console.log(this.state.formData);
  		
    this.setState({ description: '' });
    this.setState({ url: '' });
    this.setState({ upload_photo: '' });
    this.setState({ errors: '' }); 
    this.setState({ formData: new FormData() });
	}
	
	render() {
	// const { errors } = this.state;
    return (
      <div className="app flex-row align-items-center login-bg" >
        <Container>

          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="custom_group">
                <Card className="p-4">
                  <CardBody>
                    <Form encType="multipart/form-data">
                      <h1>Entryrequirement</h1>
                      <Input type="hidden" name="university_id" value={this.state.university_id} />
                      <InputGroup className="mb-4">
                        <Label for="layout">Choose Layout</Label>
                        <Input type="select" name="layout" id="layout" onChange={this.handleLayoutChange} >
                          <option value="normal">Normal</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </Input>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Label for="description">Description</Label>
                        <Input type="textarea" id="description" name="description" value={this.state.description} onChange={this.handleDescriptionChange} />
                      </InputGroup>
					            <h6 style={{color: 'red'}}>{this.state.errors.description}</h6>
                      <InputGroup className="mb-4">
                        <Label for="url">Do You Have URL Link For Entry Requirements?</Label>
                        <Input type="text" name="url" id="url" value={this.state.url} onChange={this.handleurlChange}/>
                      </InputGroup>
					            <h6 style={{color: 'red'}}>{this.state.errors.url}</h6>
                      <InputGroup className="mb-4">
                        <Input type="file" accept="image/*" multiple onChange={this.onFileChange} name="upload_photo[]" />
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.fileLength}</h6>
                      <Button color="primary" >Preview</Button>
                      <Button color="success" onClick={this.onSubmit.bind(this)} className="px-4">Save</Button>
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

export default Entryrequirement;
