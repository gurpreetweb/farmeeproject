import React from "react";
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import faqimage from "../../assets/img/faq-banner.jpg";

function template() {
  return (
    <div className="faq_page_wrapper">
      <div className="education_pro_banner">
        <img src={faqimage} alt="study_banner" />
      </div>
      <div className="faq_question_answer">
        <div className="foe-accordian">
          <div className="container">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
              <div className="foe-service-header">
                <h4 className="foe-card-title card-title">Frequently Asked questions</h4>
              </div>
            </div>
            <div className="card-header main_tag_heading active" id="stheadingOne">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#stcollapseOne" aria-expanded="true" aria-controls="stcollapseOne">
                  Students</button>
              </h5>
            </div>
            <div id="stcollapseOne" className="collapse" aria-labelledby="stheadingtwo" data-parent="#accordion">
              <div className="card-body pr-3">
                <div className="row mx-0">
                  <div className="col-md-12 foe-acc-body">
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
            </div>
            <div className="card-header main_tag_heading active" id="prheadingparnter">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#prcollapseparnter" aria-expanded="true" aria-controls="prcollapseparnter">
                  Preferred partner</button>
              </h5>
            </div>

            <div id="prcollapseparnter" className="collapse" aria-labelledby="prheadingtwo" data-parent="#accordion">
              <div className="card-body pr-3">
                <div className="row mx-0">
                  <div className="col-md-12 foe-acc-body">
                    <div className="accordion" id="accordion">
                      <div className="card">
                        <div className="card-header active" id="prheadingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#prcollapseOne" aria-expanded="true" aria-controls="prcollapseOne">
                              How soon will my enquiry be responded to?
        </button>
                          </h5>
                        </div>

                        <div id="prcollapseOne" className="collapse show" aria-labelledby="prheadingOne" data-parent="#accordion">
                          <div className="card-body pr-3">
                            <div className="row mx-0">
                              <div className="col-md-12 foe-acc-body">
                                <p>We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.
</p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="prheadingTwo">
                          <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#prcollapseTwo" aria-expanded="false" aria-controls="prcollapseTwo">
                              Does Formee Express charge an application fee?
        </button>
                          </h5>
                        </div>
                        <div id="prcollapseTwo" className="collapse" aria-labelledby="prheadingTwo" data-parent="#accordion">
                          <div className="card-body pl-4 ml-2 pr-5">
                            Good news - Formee Express does not collect an application fee! We aim to help students have a low-cost and accessible entry into their preferred program.
      </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="prheadingThree">
                          <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#prcollapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What are the Education Provider application fees?
        </button>
                          </h5>
                        </div>
                        <div id="prcollapseThree" className="collapse" aria-labelledby="prheadingThree" data-parent="#accordion">
                          <div className="card-body pl-4 ml-2 pr-5">
                            The application fees charged by education providers are varying, given that we work with providers from all around the world. From country to country, there is usually an average cost; our Preferred Partners will provide you with this information before you consider applying.

      </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>



            <div className="card-header main_tag_heading active" id="edheadinghthree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#edcollapsethree" aria-expanded="true" aria-controls="edcollapsethree">
                  Education Providers</button>
              </h5>
            </div>


            <div id="edcollapsethree" className="collapse" aria-labelledby="edheadingfour" data-parent="#accordion">
              <div className="card-body pr-3">
                <div className="row mx-0">
                  <div className="col-md-12 foe-acc-body">
                    <div className="accordion" id="accordion">
                      <div className="card">
                        <div className="card-header active" id="edheadingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#edcollapseOne" aria-expanded="true" aria-controls="edcollapseOne">
                              How soon will my enquiry be responded to?
        </button>
                          </h5>
                        </div>

                        <div id="edcollapseOne" className="collapse show" aria-labelledby="edheadingOne" data-parent="#accordion">
                          <div className="card-body pr-3">
                            <div className="row mx-0">
                              <div className="col-md-12 foe-acc-body">
                                <p>We have Preferred Partners all around the world and you can expect to receive a response within 48 hours from your initial enquiry! If you require a more urgent reply, feel free to call our customer care team for assistance.
</p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="edheadingTwo">
                          <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#edcollapseTwo" aria-expanded="false" aria-controls="edcollapseTwo">
                              Does Formee Express charge an application fee?
        </button>
                          </h5>
                        </div>
                        <div id="edcollapseTwo" className="collapse" aria-labelledby="edheadingTwo" data-parent="#accordion">
                          <div className="card-body pl-4 ml-2 pr-5">
                            Good news - Formee Express does not collect an application fee! We aim to help students have a low-cost and accessible entry into their preferred program.
      </div>
                        </div>
                      </div>





                    </div>

                  </div>
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