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

// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }

// const countErrors = (errors) => {
//   let count = 0;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (count = count+1)
//   );
//   return count;
// }

class Campuses extends Component {

  constructor(props) {
    super(props);
    const errors = {};
	this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      layout: 'normal',
      university_id: 1,
      university_campuses_id: '',
      description :'',
      no_of_campuses : '',
      sports_facilities:'',
      upload_photo: [],
      fileLength: '',
      errors: {
        description: '',
        no_of_campuses: '',
        sports_facilities: '',
        fileLength: ''
      },
      formData: new FormData(),
      regexp : /^[0-9\b]+$/
    };
    // const [upload_photo, setFile] = useState(null);
  }

  onFileChange = (event) => {
		// this.setState({
		// 	upload_photo: event.target.files[0]
    // });
    
    this.setState({fileLength: event.target.files.length});

    if(event.target.files.length < 3 ){
      for(let i = 0; i < event.target.files.length; i++) {
        this.state.formData.append('upload_photo[]', event.target.files[i], event.target.files[i].name);
        // this.setState({
        //   upload_photo: event.target.files[i]
        // });
      }
    }
    
		// let data = new FormData();
    // data.append('upload_photo', this.state.upload_photo);
    // console.log(data);
    // let uri = 'https://formeeadmin.bicsglobal.com/api/campuses_upload';
    // alert(" successfully !..");
    // const post = axios.post(uri, data).then((response) => {
    //   alert(response.data);
    // });
	}
  
handleLayoutChange = event => {
  this.setState({layout: event.target.value});
}
handleDescriptionChange = event => {
	this.setState({description: event.target.value});
}

handleno_of_campusesChange = event => {

  let numbers = event.target.value;

  // if value is not blank, then test the regex
  if (numbers === '' || this.state.regexp.test(numbers)) {
      this.setState({ [event.target.name]: numbers })
  }
 
	// this.setState({no_of_campuses: event.target.value});
}

handleSportsfacilitiesChange = event => {
  this.setState({sports_facilities: event.target.value});
}

validate = () => {
  const errors = {};
	if(this.state.description.trim() === '')
	{
	  errors.description = 'Description is required';
  }
  if(this.state.no_of_campuses.trim() === '')
	{
		errors.no_of_campuses = 'No of campuses is required';
  }
  if(this.state.sports_facilities === '' || this.state.sports_facilities === '0')
  {
    errors.sports_facilities = "Select Sport Facilities";
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
    // console.log(errors);
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
    // formData.append("upload_photo", this.state.upload_photo, this.state.upload_photo.name);
    this.state.formData.append("layout", this.state.layout);
    this.state.formData.append("description", this.state.description);
    this.state.formData.append("no_of_campuses", this.state.no_of_campuses);
    this.state.formData.append("sports_facilities", this.state.sports_facilities);

    submitForm("multipart/form-data", this.state.formData, (msg) => { this.setState({ university_campuses_id: msg.data.university_campuses_id });alert(msg.message); }, 'campuses');
    
    // console.log(this.state.formData);
    this.setState({ description: '' });
    this.setState({ no_of_campuses: '' });
    this.setState({ sports_facilities: '0' });
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
                      <h1>Campuses</h1>
                      <Link className="btn btn-primary" to="/campuses/addsubsection">Add SubSection</Link>
                      <Input type="hidden" name="university_id" value={this.state.university_id} />
                      <InputGroup className="mb-4">
                        <Label for="layout">Choose Layout</Label>
                        <Input type="select" name="layout" id="layout" onChange={this.handleLayoutChange}>
                          <option value="normal">Normal</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </Input>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Label for="description">Description</Label>
                        <Input type="textarea" id="description" name="description" maxLength="5000" value={this.state.description} onChange={this.handleDescriptionChange} />
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.description}</h6>
                      
                      <InputGroup className="mb-4">
                        <Label for="no_of_campuses">No. of campuses</Label>
                        <Input type="text" id="no_of_campuses" maxLength="3" name="no_of_campuses" value={this.state.no_of_campuses} onChange={this.handleno_of_campusesChange}/>
                      </InputGroup>                      
					            <h6 style={{color: 'red'}}>{this.state.errors.no_of_campuses}</h6>

                      <InputGroup className="mb-4">
                        <Label for="sports_facilities">Sport Facilities</Label>
                        <Input type="select" id="sports_facilities" name="sports_facilities" value={this.state.sports_facilities} onChange={this.handleSportsfacilitiesChange} >
                          <option value="0">Select Facilities</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Input>
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.sports_facilities}</h6> 

                      <InputGroup className="mb-4">
                        <Label for="upload_photo">Upload Photos</Label>
                        <Input type="file" id="upload_photo" accept="image/*" multiple onChange={this.onFileChange} name="upload_photo[]" />
                      </InputGroup>
                      <h6 style={{color: 'red'}}>{this.state.errors.fileLength}</h6>

                      <Button color="primary">Preview</Button>
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

export default Campuses;
