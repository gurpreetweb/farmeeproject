import "./Student_Overview.css";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import Service1 from '../../../assets/img/foe-service-1.svg';
import Arrowdown from '../../../assets/img/ArrowDown.svg';
import ArrowRight from '../../../assets/img/ArrowRight.svg';


function template() {
  return (
    <div className="student-overview services_student_page_Wrapper">
    <div className="foe-student-block student_Services_Wrapper">
         <div className="row w-100 foe-no-margin">
            <div className="col-12 col-xl-8 col-sm-12 col-lg-8 col-md-8 foe-student-service">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 col-12 foe-service-left">
                  <Card className="w-100 foe-card mb-0">
                    <CardBody>
                     
                       <p className="foe-card-subtitle">OUR SERVICES</p>
                      <CardTitle className="foe-card-title">Find your dream international education provider and apply directly through Formee Express</CardTitle>
                      <CardText className="foe-card-body">
                      Learn all about the education offerings, find the best option for you, then support your application with the support of our industry experts!

                      </CardText>
                      <CardLink href="#" className="foe-white-a foe-student-link"> Explore</CardLink>
                     </CardBody>
                  </Card>
                </div>
            </div>
            <div className="col-12 col-xl-6 col-sm-12 col-lg-6 col-md-6">
                &nbsp;
           </div>
         </div>
    </div>


    <div className="student-overview-inner">
         <Container>
         <div className="foe-service-header">
                    
                    <p className="foe-card-subtitle">Education Level</p>
                
                    <h4 className="foe-card-title card-title">Study with Formee Express</h4>
                 
                </div>
            <Row>
             
                <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left">
                  <Card className="w-100 foe-card">
                    <CardBody>
                     
                      <CardTitle className="foe-card-title">HIGH SCHOOL</CardTitle>
                      <CardText className="foe-card-body student-content-fix">
                      High School study is for years 9 - 12 and completion of this program will equip students with the skills required to pursue higher education.
                      </CardText>
                      <CardLink href="#" className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find schools</span></CardLink>
                     </CardBody>
                  </Card>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left">
                  <Card className="w-100 foe-card">
                    <CardBody>
                      <CardTitle className="foe-card-title">UNDERGRADUATE</CardTitle>
                      <CardText className="foe-card-body student-content-fix">
                      Whether pursuing a diploma, advanced diploma or bachelor degree, undergraduate programs are typically offered by higher education and university institutions.

                      </CardText>
                      <CardLink href="#" className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find the program</span></CardLink>
                     </CardBody>
                  </Card>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4 col-xl-4 col-12 foe-service-left">
                  <Card className="w-100 foe-card">
                    <CardBody>
                     
                      <CardTitle className="foe-card-title">POSTGRADUATE
</CardTitle>
                      <CardText className="foe-card-body student-content-fix">
                      Postgraduate programs such as graduate certificates, graduate diplomas and master’s degrees are typically 1 - 2 years in duration and can be studied upon the completion of an undergraduate program.
                      </CardText>
                      <CardLink href="#" className="foe-white-a"><span><img src={Arrowdown} alt="Arrowdown" className="fo-trans" width="24" height="" />&nbsp;&nbsp; &nbsp;Find the program</span></CardLink>
                     </CardBody>
                  </Card>
                </div>
              
            </Row>
          </Container>
        </div>
  




    <div className="foe-timeline">
      <div className="container">
    <div className="row">
    <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
                  <div className="foe-service-header">
                    
                      <p className="foe-card-subtitle">5 EASY steps</p>
                  
                      <h4 className="foe-card-title card-title">How It Works</h4>
                   
                  </div>
                </div>
				<div className="col-md-12">
 
					<ul className="timeline">
						<li className="timeline-item">
							<div className="timeline-badge"><i className="glyphicon glyphicon-off"></i></div>
							<div className="timeline-panel">
                <div className="foe-timeline-box">
								<div className="timeline-heading">
									<h4 className="timeline-title"><span>STEP 1</span></h4>
									<p className="timeline-head"> Find the right location, school</p>
								</div>
								<div className="timeline-body">
									<p>Populate the information form to filter your search results according to your unique preferences and interests.</p>
								</div>
                </div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
							<div className="timeline-panel">
              <div className="foe-timeline-box">
								<div className="timeline-heading">
									<h4 className="timeline-title"><span>STEP 2</span></h4>
									<p className="timeline-head"> Submit your application</p>
								</div>
								<div className="timeline-body">
									<p>Once you’ve decided on your preferred location and school, our Preferred Partners will assist you in processing your application fees and collating the documentation requirements for your best chance at admission!</p>
								</div>
                </div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
							<div className="timeline-panel">
              <div className="foe-timeline-box">
								<div className="timeline-heading">
									<h4 className="timeline-title"><span>STEP 3</span></h4>
									<p className="timeline-head">Get Your Letter of acceptance</p>
								</div>
								<div className="timeline-body">
									<p>Your application is sent to the Education Provider for their consideration. You will be notified quickly whether or not your application has been approved. </p>
								</div>
                </div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
							<div className="timeline-panel">
              <div className="foe-timeline-box">
								<div className="timeline-heading">
									<h4 className="timeline-title"><span>STEP 4</span></h4>
									<p className="timeline-head">Start the visa process</p>
								</div>
								<div className="timeline-body">
									<p>All countries have differing requirements when it comes to visa processing, however Formee Express’ Preferred Partners provide you with personalised information to help guide you through the process.</p>
								</div>
                </div>
							</div>
						</li>
            <li className="timeline-item">
							<div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
							<div className="timeline-panel">
              <div className="foe-timeline-box">
								<div className="timeline-heading">
									<h4 className="timeline-title"><span>STEP 5</span></h4>
									<p className="timeline-head"> Book Your Plane Ticket and Go!</p>
								</div>
								<div className="timeline-body">
									<p>Once you have obtained your acceptance letter, visa and found your accommodation, it will be time to hop on a plane and head to your destination!</p>
								</div>
                </div>
							</div>
						</li>
					</ul>
				</div>
			</div>
    </div>
    </div>
    <div className="foe-accordian foe-about-block service_accordian_section">
      <div className="container">
      <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
                  <div className="foe-service-header">
                    
                      <p className="foe-card-subtitle mb-0">Customer help</p>
                  
                      <h4 className="foe-card-title card-title">FREQUENTLY ASKED QUESTIONS</h4>
                   
                  </div>
                </div>
    <div className="accordion" id="accordion">
  <div className="card">
    <div className="card-header active" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How soon will my enquiry be responded to?
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body pr-3">
       <div className="row mx-0">
            <div className="col-md-12 foe-acc-body">
             <p>We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.
</p>
            </div>
            {/* <div className="col-md-4">
              <button className="btn btn-doc pull-right"><span>Go to documentation</span></button>
            </div> */}
       </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Does Formee Express charge an application fee?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      Good news - Formee Express does not collect an application fee! We aim to help students have a low-cost and accessible entry into their preferred program. 
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What are the Education Provider application fees?
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      The application fees charged by education providers are varying, given that we work with providers from all around the world. From country to country, there is usually an average cost; our Preferred Partners will provide you with this information before you consider applying.

      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        What is the application lead time?

        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      Turn around times are subjective to each education provider. Typically, education providers will advertise an application closure date for each term of study and students can expect to be informed on the status of their application within the two to three months to follow.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Can I book my IELTS through Formee Express or its services?

        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      Yes, you can! One of our customer service agents or Preferred Partners can book this test in at a time and location convenient to you. All you need to do is fill out a consent form and pay the IELTS fees to the external body and we will do the rest. 

      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        How can I tell which education provider is the best quality?

        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      Good news - all education providers listed with Formee Express go through a screening process; they are both low-risk and highly regarded in the local community. We do all the hard work for you by pre-assessing their suitability, however, our preferred partners can provide you with more comprehensive information about each provider to help you make your own decision.


      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSeven">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        How soon will my enquiry be responded to?


        </button>
      </h5>
    </div>
    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
      <div className="card-body pl-4 ml-2 pr-5">
      We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.

      </div>
    </div>
  </div>
</div>
    
    </div>
    </div>
    </div>
  );
};

export default template;