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


class Addsubsection extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      university_id: 1,
      university_campus_id:'1',
      university_campus_subsections_id: '',
      layout: 'normal',
      heading: '',
      sub_heading: '',
      description :'',
      upload_photo: [],
      fileLength: '',
      errors: {
        description: '',
        heading: '',
        sub_heading: '',
        fileLength: ''
      },
      formData: new FormData()
    };
    // const [upload_photo, setFile] = useState(null);
  }

  onFileChange = (event) => {
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

handleHeadingChange = event => {
	this.setState({heading: event.target.value});
}

handleSubHeadingChange = event => {
  this.setState({sub_heading: event.target.value});
}

validate = () => {
  const errors = {};
	if(this.state.description.trim() === '')
	{
	  errors.description = 'Description is required';
  }
  if(this.state.heading.trim() === '')
	{
		errors.heading = 'Heading is required';
  }
  if(this.state.sub_heading.trim() === '')
  {
    errors.sub_heading = "Sub Heading is required";
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
    // const formdata = {
    //   university_id: this.state.university_id,
		// 	description : this.state.description,
    //   no_of_campuses : this.state.no_of_campuses,
    //   sports_facilities: this.state.sports_facilities,
    //   upload_photo: this.state.upload_photo
    // }
    // const formData = new FormData();
    this.state.formData.append("university_id", this.state.university_id);
    this.state.formData.append("university_campus_id", this.state.university_campus_id);
    this.state.formData.append("description", this.state.description);
    this.state.formData.append("heading", this.state.heading);
    this.state.formData.append("sub_heading", this.state.sub_heading);

    submitForm("multipart/form-data", this.state.formData, (msg) => { this.setState({university_campus_subsections_id: msg.data.university_campus_subsections_id });alert(msg.message); }, 'campussubsection');
    
    // console.log(formData);
  		
    this.setState({ description: '' });
    this.setState({ heading: '' });
    this.setState({ sub_heading: '' });
    this.setState({ upload_photo: '' });
    this.setState({ errors: '' }); 
    this.setState({ formData: new FormData() });
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
                    <Form encType="multipart/form-data">
                      <h1>Campuses Sub Section</h1>
                      <Link className="btn btn-primary" to="/campuses">Campus</Link>
                      <Input type="hidden" name="university_id" value={this.state.university_id} />
                      <Input type="hidden" name="university_campus_id" value={this.state.university_campus_id} />
                      <InputGroup className="md-12 mb-4">
                        <Label for="layout">Choose Layout</Label>
                        <Input type="select" name="layout" id="layout" onChange={this.handleLayoutChange} >
                          <option value="normal">Normal</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </Input>
                      </InputGroup>
                      
                      <InputGroup className="md-4 mb-3">
                        <Label for="heading">Add Heading</Label>
                        <Input type="text" maxLength="200" name="heading" id="heading" value={this.state.heading} onChange={this.handleHeadingChange} />
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.heading}</h6>
                      
                      <InputGroup className="md-4 mb-3">
                        <Label for="sub_heading">Add Sub Heading</Label>
                        <Input type="text" maxLength="200" name="sub_heading" id="sub_heading" value={this.state.sub_heading} onChange={this.handleSubHeadingChange} />
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.sub_heading}</h6>
                                            
                      <InputGroup className="mb-4">
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" maxLength="5000" value={this.state.description} onChange={this.handleDescriptionChange} />
                      </InputGroup>
					            <h6 style={{color: 'red'}}>{this.state.errors.description}</h6>
                      
                      <InputGroup className="mb-4">
                        <Label for="upload_photo">Upload Photos</Label>
                        <Input type="file" id="upload_photo" accept="image/*" multiple onChange={this.onFileChange} name="upload_photo[]" />
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

export default Addsubsection;
