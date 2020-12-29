// import "./Contactus.css";
// import React, { useState } from "react";
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
// import Service1 from '../../assets/img/foe-service-1.svg';
// import Arrowdown from '../../assets/img/ArrowDown.svg';
// import ArrowRight from '../../assets/img/ArrowRight.svg';

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [phone, setPhone] = useState('');
// const [message, setMessage] = useState('');

// function submitForm(contentType, data, setResponse, path) {
//   axios({
//     url: baseurl + `contactmail`,
//     method: "POST",
//     data: data,
//     headers: {
//       "Content-Type": contentType,
//     },
//   })
//     .then((response) => {
//       setResponse(response.data);
//     })
//     .catch((error) => {
//       setResponse("error");
//     });
// }

// // validate = () => {
// //   let errors = false;
// //   const currentdate = new Date();
// //   if (this.state.mtitle === "") {
// //     toast.error("Please Enter Title.");
// //     errors = true;
// //   } else if (this.state.mdate === "") {
// //     toast.error("Please Enter Meeting Date.");
// //     errors = true;
// //   } else if (this.state.mfromtime === "") {
// //     toast.error("Please Enter From Time.");
// //     errors = true;
// //   } else if (this.state.mtotime === "") {
// //     toast.error("Please Enter TO Time.");
// //     errors = true;
// //   } else if (moment(this.state.mfromtime, ["h:mm A"]).format("HH:mm") > moment(this.state.mtotime, ["h:mm A"]).format("HH:mm")) {
// //     toast.error("Please Enter To Time is less then From Time.");
// //     errors = true;
// //   } else if (this.state.selecteduser === "") {
// //     toast.error("Please Enter Team Member.");
// //     errors = true;
// //   }
// //   else if (this.state.maddclient === "") {
// //     toast.error("Please Enter Client Email-ID.");
// //     errors = true;
// //   }
// //   return errors;
// // };


// createmeeting = (e) => {
//   e.preventDefault();

//   // const errors = validate();
//   const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("message", message);
    

//     submitForm(
//       formData,
//       (msg) => {
//         if (msg.status_code == 200) {
//           window.location = "/#/contactus";
//           toast.success("Meeting Created Successfully.");
//         } else {
//           toast.success(msg.message);
//         }
//       },
//       "studentcomposemail"
//     );
//   }


// function template() {
  
// };

// export default template;
