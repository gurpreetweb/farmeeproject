import "./legal.css";
import React from "react";
import { Container, Button, Row, Col, Form, Badge, FormGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import legalbanner from "./../../assets/img/legal-banner.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
function template() {
  return (
    <div className="faq_page_wrapper terms_banner_section">
      <div className="account-banner-box">
        <img src={legalbanner} alt="banner" />
      </div>
      <div className="term_condition_page_wrapper">
        <div className="foe-account-accordian foe-about-block">
          <div className="container">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 foe-no-padd foe-block-2">
              <div className="foe-service-header">
                <h4 className="foe-card-title card-title">Term & Conditions </h4>
              </div>
              <div className="term_paragraph">
                <p> These terms and conditions (the “Terms and Conditions”), including the Privacy Policy and other documents referred to in these terms and conditions (the “Agreement”) is a legal agreement between you (hereinafter, “you” or “your”) and Formee Express Pty Ltd., hereinafter referred to Formee Express (“Formee Express”), respecting your use of the Services as described herein.
</p>
                <p>BY INDICATING YOUR ACCEPTANCE BY CLICKING ON THE APPROPRIATE BUTTON WHEN SIGNING UP FOR THE SERVICES, OR BY OTHERWISE USING THE SERVICES, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS AGREEMENT. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THE AGREEMENT DO NOT ACCESS OR USE THE Formee Express SOLUTION.
</p>
                <p>If you have any questions or concerns about the terms of this Agreement, please contact us at <a href="mailto:info@FormeeExpress.com">info@FormeeExpress.com</a>
                </p>
              </div>
            </div>
            <div className="term_condition_Wrap">
              <div className="term_list_wrap">
                <ul>

                  <li><Link activeClass="active" to="Definitions" spy={true} smooth={true} offset={-170} duration={500}>1. Definitions</Link></li>
                  <li><Link activeClass="active" to="term-Services" spy={true} smooth={true} offset={-170} duration={500}>2. Services</Link></li>
                  <li><Link activeClass="active" to="Express-Solution" spy={true} smooth={true} offset={-170} duration={500}>3. License to Use the Formee Express Solution</Link></li>
                  <li><Link activeClass="active" to="Your-Data" spy={true} smooth={true} offset={-170} duration={500}>4. Your Data</Link></li>
                  <li><Link activeClass="active" to="De-Identified" spy={true} smooth={true} offset={-170} duration={500}>5. De-Identified Data</Link></li>
                  <li><Link activeClass="active" to="Access-Information" spy={true} smooth={true} offset={-170} duration={500}>6. Your Access Information</Link></li>
                  <li><Link activeClass="active" to="Your-Representations" spy={true} smooth={true} offset={-170} duration={500}>7. Your Representations and Warranties</Link></li>
                  <li><Link activeClass="active" to="Restrictions" spy={true} smooth={true} offset={-170} duration={500}>8. Restrictions and Limitations on Your Use of the Formee Express Solution</Link> </li>
                  <li><Link activeClass="active" to="Website-Use" spy={true} smooth={true} offset={-170} duration={500}>9. Restrictions on Formee Express Website Use</Link></li>
                  <li><Link activeClass="active" to="Obligation-report" spy={true} smooth={true} offset={-170} duration={500}>10. Your Obligation to Report Errors</Link></li>
                  <li><Link activeClass="active" to="Submissions" spy={true} smooth={true} offset={-170} duration={500}>11. Submissions</Link></li>
                  <li><Link activeClass="active" to="fees-payment-tax" spy={true} smooth={true} offset={-170} duration={500}>12. Fees, Payment and Taxes</Link></li>
                  <li><Link activeClass="active" to="Confidential-Information" spy={true} smooth={true} offset={-170} duration={500}>13. Confidential Information</Link></li>
                  <li><Link activeClass="active" to="Intellectual-Property" spy={true} smooth={true} offset={-170} duration={500}>14. Intellectual Property</Link></li>
                  <li><Link activeClass="active" to="Term-Termination" spy={true} smooth={true} offset={-170} duration={500}>15. Term and Termination</Link></li>
                  <li><Link activeClass="active" to="Termination-Expiry" spy={true} smooth={true} offset={-170} duration={500}>16. Effect of Termination or Expiry</Link></li>
                  <li><Link activeClass="active" to="Disclaimers" spy={true} smooth={true} offset={-170} duration={500}>17. Disclaimers</Link></li>
                  <li><Link activeClass="active" to="Your-Indemnities" spy={true} smooth={true} offset={-170} duration={500}>18. Your Indemnities</Link></li>
                  <li><Link activeClass="active" to="Limitation-Liability" spy={true} smooth={true} offset={-170} duration={500}>19. Limitation of Liability</Link></li>
                  <li><Link activeClass="active" to="term-General" spy={true} smooth={true} offset={-170} duration={500}>20. General</Link></li>
                  <li><Link activeClass="active" to="term-Contact" spy={true} smooth={true} offset={-170} duration={500}>21. Contact</Link></li>
                </ul>
              </div>
              <div className="term_condition_show_content">
                <div id="Definitions" className="Show_term_content">
                  <h1>1. Definitions</h1>
                  <p> In these Terms and Conditions</p>
                  <ul>
                    <li>“Access Information” has the meaning set out in Section 6.</li>
                    <li>“Agreement” has the meaning set out in the first paragraph of these Terms and Conditions.</li>
                    <li>“Applicable Law” means any domestic or foreign law, rule, statute, subordinate legislation, regulation, by-law, order, ordinance, protocol, code, guideline, treaty, policy, notice, direction or judicial, arbitral, administrative, ministerial or departmental judgment, award, decree, treaty, directive, or other requirement or guideline published or in force at any time during the term of this Agreement which applies to or is otherwise intended to govern or regulate any person (including any Party), property, transaction, activity, event or other matter, including any rule, order, judgment, directive or other requirement or guideline issued by any Governmental or Regulatory Authority
</li>
                    <li>“Application” has the meaning set out in Section 2(a)(ii).</li>
                    <li>“Formee Express Partner” means any educational institution, company, organization, association or individual that has entered into an agreement with Formee Express to use or promote the Formee Express Solution, or to enable their employees or students to use or promote the Formee Express Solution.
</li>
                    <li>“Formee Express Solution” means the Formee Express website and the Services, including the Content therein, as modified from time to time.
</li>
                    <li>“Confidential Information” means information considered confidential or proprietary by Formee Express, including the Formee Express Solution, its business plan and strategy, any design, prototype, compilation of information, data, program, method, invention, license, technique or process, information relating to any Formee Express service, Formee Express’s software, website and web platform, client and user information, financial information, marketing information, intellectual property, business opportunities, or research and development.
</li>
                    <li>“Content” has the meaning set out in Section 2(a)(i).
</li>
                    <li>“De-identified Data” has the meaning set out in Section 5.
</li>
                    <li>“Governmental or Regulatory Authority” means any national, provincial, territorial, state, county, municipal, quasi-governmental or self-regulatory department, authority, organization, agency, commission, board, tribunal, dispute settlement panel or body, bureau, official, minister, Crown corporation, or court or other law, rule or regulation-making entity having or purporting to have jurisdiction over Formee Express, you or any other person, property, transaction, activity, event or other matter related to this Agreement, including subdivisions of, political subdivisions of and other entities created by, such entities
</li>
                    <li>“Party” means each of Formee Express and you, and “Parties” means Formee Express and you collectively.
</li>
                    <li>“Personal Information” means information about an identifiable individual.
</li>
                    <li>“Privacy Policy” has the meaning set out in Section 4(e).
</li>
                    <li>“Program” means a study program, language programs, summer camps, including one of the academic programs or a program specifically designed to transition international students (sometimes referred to as a pathway program), offered by the Formee Express Partners.
</li>
                    <li>“Preferred Partner” means any individual or entity that you engage to represent you to submit an Application using the Formee Express Solution.
</li>
                    <li>“Services” has the meaning set out in Section 2.</li>
                    <li>“Submission” has the meaning set out in Section 11(a).</li>
                    <li>“Terms and Conditions” has the meaning set out in the first paragraph of these terms.</li>
                    <li>“Your Data” has the meaning set out in Section 4(a)(i).</li>

                  </ul>
                </div>
                <div id="term-Services" className="Show_term_content">
                  <h1>2. Services</h1>
                  <p> Formee Express’s services described in this Section 2 (collectively referred to as the “Services”) consist of the following:</p>
                  <ul>
                    <li>Formee Express will provide access to certain information, material or content (including, pricing, features, promotion and information of third parties) contained on or provided through the Formee Express website (the “Content”) to provide information to assist you through the process of becoming a student at certain Formee Express Partners within Australia and the U.S., including Program information;</li>
                    <li>Formee Express will provide you with the ability to input Your Data into the Formee Express Solution and will act as an intermediary to pass Your Data to the applicable Formee Express Partners in order to enable you to apply to Programs offered by such Formee Express Partners (each, an “Application”); and</li>
                    <li>Formee Express will facilitate an Application by, on a case-by-case basis, assisting you with communications with the applicable Formee Express Partners, passing through Application fees and other payments associated with an Application, and providing guidance and advice associated with an Application.</li>
                  </ul>
                </div>
                <div id="Express-Solution" className="Show_term_content">
                  <h1>3. License to Use the Formee Express Solution</h1>
                  <p> Subject to the terms and conditions in the Agreement and any restrictions contained in the Content, Formee Express hereby grants you a personal, non-exclusive, revocable, non-transferable license to access the Formee Express Solution solely for the purposes of using the Services, view the Content, and submit an Application to Formee Express Partners.</p>
                </div>
                <div id="Your-Data" className="Show_term_content">
                  <h1>4. Your Data</h1>
                  <p>Your Data Must be Complete and Accurate</p>
                  <p>In order to use the Formee Express Solution, you must:</p>
                  <ul>
                    <li>provide up-to-date complete and accurate Personal Information or other data submitted by you to the Formee Express Solution or otherwise provided to Formee Express, including name information, contact information, citizenship and legal status, gender, date of birth, home and mailing address, marital status, emergency contact information, financial information, education qualification, employment information, educational information, transcript, English or French test score, passport details, information required for visa application, including financial and medical information (“Your Data”), as requested by Formee Express on Formee Express’s website, and as required to process your Application;</li>
                    <li>where payment is required, provide up-to-date, complete and accurate payment information as required by Formee Express or Formee Express’s third party payment processor, as applicable (which may include a valid PayPal or Stripe account, or credit card information for a credit card that is valid and legally registered to you); and</li>
                    <li>OBTAIN ALL RELEVANT PERMISSIONS FROM ANY AFFECTED THIRD PARTY, SUCH AS YOUR EDUCATIONAL INSTITUTION, FOR FORMEE EXPRESS TO COLLECT YOUR DATA.</li>
                  </ul>
                  <h2>Ownership of Your Data</h2>
                  <p>Nothing herein transfers any ownership of Your Data to Formee Express in its original form.</p>
                  <h2>Quality of Your Data and Feedback</h2>
                  <ul>
                    <li>Without limiting the foregoing, Formee Express does not assess Your Data for quality or otherwise. Formee Express, Formee Express Partners and other third parties to whom Formee Express is permitted to pass Your Data under this Agreement, may rely on the accuracy of Your Data provided by you to the Formee Express Solution.</li>
                    <li>Any feedback that you receive respecting Your Data is not as the result of any specific examination of the data by Formee Express, or any judgment exercised by Formee Express respecting Your Data, but rather is solely based on the compliance requirements of Formee Express Partners.</li>
                  </ul>
                  <h2>Consent to Processing of Your Data</h2>
                  <p>An integral part of the Formee Express Solution entails the collection, processing, transmission and disclosure of Your Data by Formee Express, Formee Express Partners and their service providers, and you hereby specifically consent to:</p>
                  <ul>
                    <li>Formee Express’s provision of Your Data to any Formee Express Partner, visa agencies, English and French test score organizations, professional bodies, service providers to Formee Express (including our hosting providers) as part of the provision of the Formee Express Solution to you, and Governmental or Regulatory Authorities; and</li>
                    <li>communications from Formee Express (including e-mail communications, both marketing and informational) respecting the Formee Express Solution, and Formee Express’s products and services.</li>
                  </ul>
                  <h2>Privacy Policy</h2>
                  <p>Your Personal Information will be handled in accordance with Formee Express’s Privacy Policy accessible via the following link: https://www.FormeeExpress.com/privacy-policy (the “Privacy Policy”). Notwithstanding the foregoing, Formee Express reserves the right at all times to disclose any Personal Information as it deems necessary to satisfy any Applicable Law, legal process or requirements of a Governmental or Regulatory authority.</p>
                  <h2>Storage of Your Data in Other Jurisdictions</h2>
                  <p>You acknowledge that, due to the nature of the Formee Express Solution, Your Data uploaded to the Formee Express Solution may be hosted on servers residing in jurisdictions other than Australia, over which Formee Express has no direct control. By using the Formee Express Solution, Your Data may become, during the period that Your Data is hosted on such servers, subject to the Applicable Laws of the jurisdiction in which such servers reside or to the terms of agreements respecting the hosting of data on such servers.</p>
                </div>
                <div id="De-Identified" className="Show_term_content">
                  <h1>5. De-Identified Data</h1>
                  <p>Formee Express may also use itself or provide to third parties, Your Data, and any data regarding your use of the Formee Express Solution, in aggregated form, in a manner that does not identify you (“De-Identified Data”), subject to Formee Express’s Privacy Policy, for Formee Express’s business uses, including for the purposes of enhancing and fixing the Formee Express Solution, performing analytics, marketing the Formee Express Solution to third parties, and selling such De-Identified Data for profit. Formee Express will own any and all intellectual property rights in the output of Formee Express’s use of any such De-identified Data.</p>
                </div>
                <div id="Access-Information" className="Show_term_content">
                  <h1>6. Your Access Information</h1>
                  <p> Formee Express will provide you with certain information to allow you to use the Formee Express Solution, such as one or more user IDs and passwords and/or the ability to create user IDs and/or passwords (the “Access Information”). The Access Information is provided on the understanding that it is personal to you; you will not permit anyone other than you or your authorized representatives to obtain access to the Formee Express Website using the Access Information.</p>
                </div>
                <div id="Your-Representations" className="Show_term_content">
                  <h1>7. Your Representations and Warranties</h1>
                  <p>You covenant, represent and warrant that:</p>
                  <ul>
                    <li>you have reached the age of majority in your jurisdiction of residence and have the legal authority to create a binding legal obligation;
</li>
                    <li>you will not permit anyone other than yourself or your authorized designate to obtain access to the Formee Express Solution through your Formee Express account or otherwise using your Access Information;
</li>
                    <li>you will only use the Formee Express Solution in accordance with this Agreement and Applicable Law;
</li>
                    <li>you will comply with all applicable intellectual property laws in your use of the Formee Express Solution and not infringe, violate or misappropriate the intellectual property rights of any third party;
</li>
                    <li>you will comply with any Formee Express Partner policies and procedures applicable to your Application;
</li>
                    <li>Your Data is true, accurate, current and complete, and if it becomes inaccurate, that you will promptly notify Formee Express or update Your Data on the Formee Express Solution;
</li>
                    <li>to the extent that you engaged a Preferred Partner to provide Your Data on your behalf for the purposes of using the Formee Express Solution: (A) that the Preferred Partner has a legitimate educational interest in access to your educational records and information (the “Educational Records”); and (B) in the U.S. the Preferred Partner may have access to such Educational Records;
</li>
                    <li>you will not solicit any immigration or visa related advice, at any stage of a visa application or proceeding (including prior to a visa application being made), from a Preferred Partner unless you have confirmed that the Preferred Partner complies with Applicable Law in the country to which you are applying and, if required, confirming that the Preferred Partner has a registration pursuant to such Applicable Law;
</li>
                    <li>you will not pay a related fee or other consideration to any unauthorized Preferred Partners for any immigration or visa related advice unless they have confirmed to you that they are qualified under Applicable Law;</li>
                    <li>you will be solely responsible for all activities with respect to the Formee Express Solution undertaken by you or your designates;
</li>
                    <li>you will not use the Formee Express Solution to provide commercial services to, or for the benefit of, any third party;
</li>
                    <li>you have the right and the authority to enter into this Agreement, to grant the rights and licences referred to in this Agreement, to use the Formee Express Solution, and to post or upload any content to Formee Express’s website or otherwise provide such content and Your Data to Formee Express;</li>
                    <li>you have all legal rights necessary to use the Formee Express Solution, both in the jurisdiction in which you are located and in the jurisdiction where the Formee Express Partner you are applying to is located, including the right to access the Content, and the right to make the Application and provide Your Data;</li>
                    <li>you are not located in a country that is subject to an Australian or U.S. Government embargo or sanctions that would prevent your from becoming a student;</li>
                    <li>you are not listed on any Australian or U.S. Governmental or Regulatory Authority lists of prohibited or restricted parties;</li>
                    <li>you agree to obtain all authorizations necessary from all third parties for your use of any third-party data in conjunction with the Formee Express Solution;</li>
                    <li>you will ensure that your use of the Formee Express Solution does not interfere with, degrade, or adversely affect any software, system, network or data used by any person including Formee Express and other users of the Formee Express Solution (including by ensuring that you do not upload any viruses or other harmful code in using the Formee Express Solution or by placing an undue burden upon the CPUs, servers or other resources used to provide the Formee Express Solution);</li>
                    <li>you will not in any way use the Formee Express Solution to commit or attempt to commit a crime or facilitate the commission of any crime or other illegal or tortious acts, including any infringement of intellectual property rights, any fraudulent activities, any deceptive impersonation, or any activities that violate any third party’s privacy rights;</li>
                    <li>you will not interfere with or in any manner compromise any of Formee Express’s security measures;</li>
                    <li>you will not alter, modify, delete, or otherwise interfere with or in any manner compromise any Content or features accessible through the Formee Express Solution, including, the forms, Content delivery and display functionality of the Formee Express website;</li>
                    <li>you will cooperate with Formee Express and provide information requested by Formee Express to assist Formee Express and any Governmental or Regulatory Authorities in investigating or determining whether there has been a breach of this Agreement or Applicable Law; and </li>
                    <li>you will comply with the terms and conditions of any agreements entered into between you and any third party (including the Formee Express Partners, the service providers for any Internet services you use in conjunction with the Formee Express Solution, and the hardware providers for any mobile device or other computing equipment through which you use the Formee Express Solution), and to the extent that such agreements impose additional restrictions respecting your use of the Formee Express Solution (whether by reason of usage limitations or otherwise), you will use the Formee Express Solution in compliance with such restrictions.</li>

                  </ul>
                </div>
                <div id="Restrictions" className="Show_term_content">
                  <h1>8. Restrictions and Limitations on Your Use of the Formee Express Solution</h1>
                  <h2>Access to Programs</h2>
                  <ul>
                    <li> You acknowledge that only certain Formee Express Partners have agreements with Formee Express to enable you to make an Application to such Formee Express Partners through the Formee Express Solution, and that not all educational study programs of such Formee Express Partners may be offered as being Programs available to you using the Formee Express Solution.
               </li>
                  </ul>
                  <h2>Usage Policies</h2>
                  <ul>
                    <li>
                      The Formee Express Solution will be subject to the usage policies as provided to you by Formee Express from time to time, including in electronic form by posting on Formee Express’s website. Such policies may include limitations on data storage space, and equipment and/or software requirements. You are solely responsible for compliance with such policies.
                  </li>
                  </ul>
                  <h2>Equipment</h2>
                  <ul>
                    <li>You are solely responsible for the selection, implementation, installation, maintenance and performance of any and all equipment, software and services used in conjunction with using the Formee Express Solution (except for Formee Express’s computer systems and networks), including your choice and use of your Internet Service Provider.</li>
                  </ul>
                  <h2>Data Integrity and Back-up</h2>
                  <ul>
                    <li>You acknowledge and agree that Formee Express cannot guarantee data integrity, and that it is solely your responsibility to back-up any of Your Data that you use in conjunction with the Formee Express Solution.
</li>
                  </ul>
                  <h2>Not for Time Sensitive Applications</h2>
                  <ul>
                    <li>The Formee Express Solution is not developed or licensed for use in any inherently dangerous, time-sensitive, or mission critical manner.</li>
                  </ul>
                </div>
                <div id="Website-Use" className="Show_term_content">
                  <h1>9: Restrictions on Formee Express Website Use</h1>
                  <p>You will not:</p>
                  <ul>
                    <li>copy, reproduce, modify, enhance, improve, alter, reverse engineer, disassemble, deconstruct, translate, decrypt, reverse compile or convert into human readable form the Formee Express Solution, or any part thereof;</li>
                    <li>distribute, assign, license, sublicense, lease, rent, transfer, sell or otherwise provide access to the Formee Express Solution, in whole or in part, to any third party on a temporary or permanent basis;</li>
                    <li>remove, deface, cover or otherwise obscure any proprietary rights notice or identification on the Content (including without limitation any copyright notice);
                    use the Solution in any way inconsistent with the use parameters for the Formee Express Solution;
</li>
                    <li>attempt to hack the Formee Express Solution or any communication initiated by or made through the Formee Express Solution or to defeat or overcome any encryption or other technical protection methods implemented with respect to the Formee Express Solution, data or Content or programming transmitted, processed or stored by Formee Express or other users of the Formee Express Solution;</li>
                    <li>collect any information or communication about the users of the Formee Express Solution, by monitoring, interdicting or intercepting any process of or communication initiated by the Formee Express website or by developing or using any software or any other process or method that engages or assists in engaging in any of the foregoing;</li>
                    <li>use any type of bot, spider, virus, clock, timer, counter, worm, software lock, drop dead device, packet-sniffer, Trojan-horse routing, trap door, time bomb or any other codes or instructions that are designed to be used to provide a means of surreptitious or unauthorized access to the Formee Express Solution or any computer system or that are designed to monitor, distort, delete, damage or disassemble the Formee Express Solution or its ability to communicate and perform the Services; or</li>
                    <li>authorize, permit or otherwise acquiesce in any other party engaging in any of the activities set forth in this Section 8, or attempting to do so.</li>
                  </ul>
                  <h2>Changes to Terms and Conditions; Changes to Formee Express Solution; Right to Edit and Remove Your Data; Suspension or Termination</h2>
                  <h2>Changes to Terms and Conditions</h2>
                  <ul>
                    <li>Formee Express reserves the right to change these Terms and Conditions at any time without notice. Your continued access to or use of the Formee Express Solution after any changes to these Terms and Conditions indicates your acceptance of such changes. It is your responsibility to review these Terms and Conditions regularly.</li>
                  </ul>
                  <h2>Changes to the Formee Express Solution</h2>
                  <ul>
                    <li>Formee Express reserves the right to change, suspend or discontinue the Formee Express Solution at any time, including the availability of any Content at any time, and from time to time, without notice offered by Formee Express.</li>
                  </ul>
                  <h2>Right to Edit and Remove Your Data</h2>
                  <ul>
                    <li>Notwithstanding anything to the contrary herein, Formee Express reserves the right to review Your Data stored in files or programs on Formee Express’s servers to verify your compliance with this Agreement. Formee Express has the right to edit or remove any of Your Data that, in Formee Express’s sole discretion, Formee Express believes may be unlawful, obscene, abusive, or otherwise objectionable.</li>
                  </ul>
                  <h2>Suspension or Termination</h2>
                  <ul>
                    <li>Formee Express may impose limits on the Formee Express Solution or terminate or restrict your access to parts or all of the Formee Express Solution without liability. Where feasible, Formee Express will provide you with advance notice of such changes, limitations or discontinuance; however, you acknowledge that such notice may not be feasible in all circumstances, and that Formee Express will have no liability whatsoever for its failure to provide such notice to you.</li>
                    <li>Formee Express reserves the right to revoke your access to the Formee Express Solution for any abusive conduct or fraudulent use of the Formee Express Solution and to cease the Formee Express Solution temporarily or permanently, if your use of the Formee Express Solution constitutes, in Formee Express’s sole discretion, a threat to Formee Express or any third party’s computer systems, networks, files, materials or other data, or a breach of this Agreement.</li>
                    <li>Without limiting other remedies, Formee Express may limit your activity, issue a warning, temporarily suspend, indefinitely suspend or terminate your account and refuse to provide Formee Express Solution to you if: (a) you breach this Agreement or the documents it incorporates by reference; (b) Formee Express is unable to verify or authenticate any information you provides; or (c) Formee Express believes that your actions may cause financial loss or legal liability for you, Formee Express Partners, other users or Formee Express. The above-described actions are not Formee Express’s exclusive remedies and Formee Express may take any other legal, equitable or technical action it deems appropriate in the circumstances. Formee Express will not have any liability to you or any third party in relation to the termination of this Agreement for any reason whatsoever.</li>
                  </ul>
                  <h2>Investigations</h2>
                  <ul>
                    <li>Formee Express reserves the right to investigate suspected violations of this Agreement.</li>
                    <li>You will cooperate with: (A) Governmental or Regulatory Authorities in the investigation of suspected criminal violations; (B) Formee Express Partners investigating academic fraud or other misdemeanours, relating to your Application or otherwise; and (C) system administrators at Internet service providers, networks or computing facilities, and other content providers, in order to enable Formee Express to enforce the terms and conditions of this Agreement.</li>
                  </ul>

                </div>
                <div id="Obligation-report" className="Show_term_content">
                  <h1>10. Your Obligation to Report Errors</h1>
                  <p> You will promptly and accurately report to Formee Express any actual or apparent errors, problems, nonconformities or other difficulties with the Formee Express Solution, along with any other information reasonably requested by Formee Express to aid in resolving such errors, problems, nonconformities or other difficulties, and hereby consent to the collection, processing, transmission and disclosure of such information by Formee Express for the purposes of Formee Express’s internal use to improve the Formee Express Solution or other Formee Express products or services.</p>
                </div>
                <div id="Submissions" className="Show_term_content">
                  <h1>11. Submissions</h1>
                  <ul>
                    <li>Any suggestions, bug reports or other communications respecting the functionality of the Formee Express Solution or Formee Express’s website that you transmit to Formee Express by any means (each, a “Submission”), are considered non-confidential and may be disseminated or used by Formee Express or any third party without compensation or liability to you for any purpose whatsoever, whether for inclusion as part of the Formee Express Solution or otherwise.</li>
                    <li>You hereby grant Formee Express, its affiliates and successors a perpetual, worldwide, non-exclusive, royalty-free, sublicensable and transferable license to use, copy, distribute, transmit, modify, develop, prepare derivative works of any Submission on, through or in connection with the Service, including for promoting, improving and developing the Formee Express Solution. This provision does not apply to Personal Information that is subject to Formee Express’s Privacy Policy.</li>
                  </ul>
                </div>
                <div id="fees-payment-tax" className="Show_term_content">
                  <h1>12. Fees, Payment and Taxes</h1>
                  <h2>Fees</h2>
                  <ul>
                    <li>You will pay all applicable fees in connection with the Formee Express Solution, as set forth in Formee Express’s standard price list, as set forth on Formee Express’s website or as otherwise provided to you. Fees are quoted and payable in Australian dollars for Australian related Applications and USD U.S. related Applications.</li>
                    <li>Formee Express may require you to pay an Application processing deposit depending on the country from which you are applying, other characteristics applicable to applicants, and the related likelihood of an Application being successful due to Governmental or Regulatory Authority visa approvals. The details regarding the Application processing deposit and countries to which it will apply may be viewed on the Formee Express website, and may be changed by Formee Express from time to time. The situations where an Application processing deposit is refundable and situations where an Application processing deposit will NOT be returned to you are set out on the <b>Formee Express Website.</b> THE SITUATIONS WHERE AN APPLICATION PROCESSING DEPOSIT WILL NOT BE RETURNED TO YOU INCLUDE THE FOLLOWING SITUATIONS, IF: (A) YOU FAIL TO PROVIDE THE REQUIRED DOCUMENTS TO PROCESS THE APPLICATION; (B) YOUR VISA APPLICATION IS REJECTED; OR (C) YOU CANCEL YOUR APPLICATION BEFORE AN ADMISSION DECISION IS RECEIVED.
</li>
                    <li>Certain fees charged by Formee Express under this Agreement are set by Formee Express Partners or other third parties, and Formee Express has no control over the fee amount, but simply remits such fee directly to the applicable Formee Express Partner or third party, and that payment obligations are therefore non-cancellable and fees paid are non-refundable.</li>
                    <li>Formee Express reserves the right to modify such fees, upon reasonable notice, which may be performed by updating Formee Express’s standard price list, as set forth on Formee Express’s website.</li>
                    <li>Your use of the Formee Express Solution following such changes constitutes your acceptance of any new or increased charges.</li>
                  </ul>
                  <h2>Fee Payment</h2>
                  <ul>
                    <li>Where you pay fees by means of a credit card, you authorize Formee Express or its third-party payment processor to automatically charge you for any and all fees incurred by you for Formee Express Solution. If your credit card is rejected for any reason, you will be responsible for any fees and charges associated with such rejection.</li>
                    <li>The foregoing will not limit Formee Express’s ability to exercise any rights available to it in law or equity respecting the collection of any amounts payable hereunder, and you will also be responsible for paying for all reasonable fees and costs incurred by Formee Express, including legal fees, in collecting any overdue amounts or enforcing any provision of this Agreement.
</li>
                    <li>Without limiting the foregoing, Formee Express reserves the right not to process any Application or portion thereof prior to obtaining full payment of fees from you.</li>
                  </ul>
                  <h2>Interest on Late Payments</h2>
                  <ul>
                    <li>In addition to any other rights and remedies available to Formee Express, Formee Express will be entitled to charge interest on all outstanding amounts at the lesser of 1.5% per month or the maximum rate permitted by Applicable Law, such interest commencing as of the due date for such payment.</li>
                  </ul>
                  <h2>Taxes</h2>
                  <ul>
                    <li>You are responsible for, and will pay all taxes relating to this Agreement, excluding any taxes based on the net income of Formee Express. Unless otherwise indicated, all amounts payable by you under this Agreement are exclusive of any tax, duty, levy, or similar government charge that may be assessed by any jurisdiction, whether based on gross revenue, the delivery, possession or use of the Formee Express Solution, the execution of this Agreement or otherwise.</li>
                    <li>If you are required to withhold any taxes from payments owed under this Agreement, the amount of payment due will automatically be increased to offset such tax, so that the amount actually remitted to Formee Express will equal the amount due.</li>
                    <li>You will promptly furnish Formee Express with copies of all official receipts evidencing payment of taxes due under or in relation to this Agreement to the appropriate taxing authority.</li>
                  </ul>
                </div>
                <div id="Confidential-Information" className="Show_term_content">
                  <h1>13. Confidential Information</h1>
                  <ul>
                    <li>You must keep the terms of this Agreement and all information provided by Formee Express confidential, except to the extent required to perform the Recruitment Services.</li>
                    <li>You acknowledge that, during the course of the term of this Agreement, you may be exposed to Confidential Information.</li>
                    <li>At all times during the Term and at all times following termination of this Agreement, whether voluntary or involuntary:
                   <ul>
                        <li>you will maintain all Confidential Information in strict confidence, will take all necessary precautions against unauthorized disclosure of the Confidential Information, and will not directly or indirectly, disclose, allow access to, transmit or transfer any Confidential Information to a third party without the knowledge and express written consent of Formee Express;</li>
                        <li>you will not use, disclose or reproduce the Confidential Information except as reasonably required in the receipt of the Services and with the knowledge and express written consent of Formee Express; and</li>
                        <li>you will advise Formee Express immediately in writing of any misappropriation, disclosure, conversion or misuse by any person of any Confidential Information of which you may become aware.</li>
                      </ul>

                    </li>
                    <li>Subject to Formee Express’s ability to disclose Your Data as permitted under this Agreement, Formee Express will use reasonable commercial endeavours to safeguard Your Data and keep it confidential, while Your Data is in Formee Express’s control, including implementing organisational and technical measures to protect your Personal Information. Formee Express may also retain and disclose Your Data to: (i) Governmental or Regulatory Authorities to the extent required by Applicable Law: (ii) its professional advisors to the extent required to: (A) enable Formee Express to fulfil its obligations pursuant to Applicable Law; or (B) defend or bring a claim relating to a breach of this Agreement.</li>
                    <li>The non­disclosure obligations under this Agreement will not apply to information which a Party can establish:
                 <ul>
                        <li>is, or becomes, readily available to the public other than through a breach of this Agreement;</li>
                        <li>was disclosed, lawfully and without breach of any contractual or other legal obligation, to a Party by a third party without any confidentiality obligation attached to such information;</li>
                        <li>was lawfully known to a Party without any confidentiality obligation prior to receipt of the information; or</li>
                        <li>was independently developed or discovered by a Party outside of the course of such Party’s performance of their obligations under this Agreement, without any reference to any Confidential Information obtained directly or indirectly from the disclosing Party.</li>
                      </ul>
                    </li>
                    <li>You will immediately return to Formee Express all Confidential Information which is in your possession or control upon the earlier of a request by Formee Express or the termination of this Agreement (whether voluntary or involuntary).</li>
                    <li>Damages may not be an adequate remedy to compensate Formee Express for any breach of your obligations contained herein, and accordingly you agree that in addition to any and all other remedies available, Formee Express will be entitled to obtain relief by way of a temporary or permanent injunction to enforce your obligations.</li>
                  </ul>
                </div>
                <div id="Intellectual-Property" className="Show_term_content">
                  <h1>14. Intellectual Property</h1>
                  <p>The Formee Express Solution is owned by Formee Express or its third-party licensors, who retain all right, title and interest therein. The Formee Express Solution is protected by Australian, U.S. and international copyright laws. In addition, other intellectual property laws (including patent laws) and treaties may protect the Formee Express Solution. You do not acquire any intellectual property or other proprietary rights under this Agreement, including any right, title or interest in and to patents, copyrights, trade-marks, industrial designs, confidential information, or trade secrets, whether registered or unregistered, relating to the Formee Express Solution, or any part thereof. Any rights not expressly granted under this Agreement are reserved to Formee Express or its third-party licensors.</p>
                </div>
                <div id="Term-Termination" className="Show_term_content">
                  <h1>15. Term and Termination</h1>
                  <ul>
                    <li>This Agreement will commence upon your acceptance of these Terms and Conditions on the Formee Express website.</li>
                    <li>This Agreement may be terminated by either Party for any reason, without cause, upon 30 days’ written notice addressed to the other Party.
</li>
                    <li>
                      This Agreement may be terminated by Formee Express immediately upon notice for cause if:
                     <ul>
                        <li>you commit a material breach of this Agreement and fail to rectify the breach within 30 calendar days of Formee Express delivering notice of the breach; or
</li>
                        <li>you commit a breach of any of your representations in this Agreement; or
</li>
                        <li>if Formee Express is prevented from providing any portion or all of the Formee Express Solution due to: (A) your acts or omissions in breach of this Agreement; (B) acts or omissions of any third party (including any Formee Express Partner); or (C) any Applicable Law or ruling issued in any form whatsoever by a Governmental or Regulatory Authority.
</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="Termination-Expiry" className="Show_term_content">
                  <h1>16. Effect of Termination or Expiry</h1>
                  <ul>
                    <li>Upon any termination or expiry of this Agreement for any reason (whether by you or by Formee Express), you must cease all use of the Formee Express Solution.
</li>
                    <li>Termination or expiry of this Agreement, for any reason, will not affect your payment obligation for any fees accrued hereunder or payments owing prior to the effective date of termination or expiry.</li>
                    <li>The termination of this Agreement by either Party does not affect any accrued rights or remedies of either Party.</li>
                    <li>Any provision of this Agreement which expressly states that it is to continue in effect after termination or expiration of this Agreement, or which by its nature would survive the termination or expiration of this Agreement, including this Section 16, will do so.</li>
                  </ul>
                </div>
                <div id="Disclaimers" className="Show_term_content">
                  <h1>17. Disclaimers</h1>
                  <h2>Disclaimer Of Implied Warranties</h2>
                  <ul>
                    <li>THE FORMEE EXPRESS SOLUTION, INCLUDING FOR GREATER CERTAINTY, THE CONTENT, AND REFERENCES, LINKS AND INFORMATION IN THE CONTENT, IS PROVIDED TO YOU “AS IS” WITHOUT WARRANTY OR CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, SECURITY OR ACCURACY.</li>

                  </ul>
                  <h2>Your Reliance On Content</h2>
                  <ul>
                    <li>FORMEE EXPRESS HAS NO SPECIAL RELATIONSHIP WITH OR FIDUCIARY DUTY TO YOU, AND YOU ACKNOWLEDGE THAT FORMEE EXPRESS HAS NO CONTROL OVER, AND NO DUTY TO TAKE ANY ACTION REGARDING ANY ACTS OR OMISSIONS TAKEN BY YOU OR ANY OTHER USER OF THE FORMEE EXPRESS SOLUTION, INCLUDING HOW YOU OR ANY OTHER USER MAY INTERPRET OR USE CONTENT ACCESSED OR DEVELOPED THROUGH THE FORMEE EXPRESS SOLUTION, OR WHAT ACTIONS YOU MAY TAKE AS A RESULT OF HAVING BEEN EXPOSED TO CONTENT OBTAINED THROUGH THE FORMEE EXPRESS SOLUTION.
</li>
                    <li>THE CONTENT ON THE FORMEE EXPRESS SOLUTION INCLUDES REFERENCES TO THIRD PARTIES, INCLUDING THE FORMEE EXPRESS PARTNERS, LINKS TO THIRD PARTY WEBSITES OR DOCUMENTS, AND INCORPORATES INFORMATION OBTAINED FROM THIRD PARTIES, INCLUDING FORMEE EXPRESS PARTNERS. CONTENT MAY ALSO BE CREATED BY FORMEE EXPRESS BASED ON SUCH THIRD PARTY INFORMATION, WHICH MAY CHANGE FROM TIME TO TIME WITHOUT NOTICE TO FORMEE EXPRESS.
</li>
                    <li>FORMEE EXPRESS ASSUMES NO RESPONSIBILITY FOR ANY ERRORS, OMISSIONS, INACCURACIES, EFFECTIVENESS, STANDARDS COMPLIANCE, COPYRIGHT COMPLIANCE, LEGALITY, DECENCY, OR ANY OTHER ASPECT OF THE CONTENT PROVIDED THROUGH THE FORMEE EXPRESS SOLUTION.
</li>
                    <li>UNDER NO CIRCUMSTANCES WILL FORMEE EXPRESS BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR RELIANCE ON CONTENT OBTAINED THROUGH USE OF THE FORMEE EXPRESS SOLUTION, INCLUDING ANY THIRD PARTY LINKED SITE (INCLUDING ANY OPINIONS, STATEMENTS OR ADVICE).
</li>
                    <li>IT IS YOUR RESPONSIBILITY TO EVALUATE THE ACCURACY, COMPLETENESS AND USEFULNESS OF ANY CONTENT PROVIDED, AND USE OF THE FORMEE EXPRESS SOLUTION IS SOLELY AT YOUR OWN RISK.
</li>
                    <li>FORMEE EXPRESS WILL HAVE NO LIABILITY WHATSOEVER RESPECTING ANY CLAIM BY YOU OR ANY THIRD PARTY WHOSE CONTENT IS COLLECTED IN YOUR USE OF THE FORMEE EXPRESS SOLUTION, WHETHER RELATED TO PRIVACY OR OTHERWISE, IN RELATION TO FORMEE EXPRESS’ USE OF YOUR DATA TO PROVIDE THE FORMEE EXPRESS SOLUTION.
</li>
                  </ul>
                  <h2>Control of Third Parties</h2>
                  <ul>
                    <li>Formee Express has no control over Formee Express Partners or any other entity granting visas, admissions, permits or other authorizations in connection with the Application; you acknowledge that the success of your Application is solely within the control of such third parties, not Formee Express, and therefore release Formee Express from all liability in relation to your Application.
</li>
                  </ul>
                  <h2>Rejection of Applications</h2>
                  <ul>
                    <li>Formee Express is not responsible in any way for your Application, mistakes in Your Data, or your failure to obtain entrance to your selected Program(s) or Formee Express Partner(s).</li>
                  </ul>
                  <h2>Issues with Formee Express Partners</h2>
                  <ul>
                    <li>All issues respecting Applications, Programs, and your failure to comply with Formee Express Partner policies, are solely as between you and the applicable Formee Express Partner, and Formee Express bears no responsibility or liability in relation to such matters.</li>
                  </ul>
                  <h2>Inability to Access Country</h2>
                  <ul>
                    <li>You are solely responsible for fulfilling any entry requirements necessary to gain admission into the country where your Program is located in compliance with Applicable Law and any requirements of Governmental or Regulatory Authorities.</li>
                  </ul>
                  <h2>Service Providers</h2>
                  <ul>
                    <li>Although Formee Express has made reasonable efforts to verify that its agreements with its service providers are reasonably protective of Your Data, you acknowledge that Formee Express has no liability for any acts or omissions of third parties in relation to such servers and the data stored on them. You therefore hereby release Formee Express from all liability for any governmental or third party action taken in such jurisdictions with respect to such information and data or the servers on which Your Data resides, and you acknowledge that you retain sole responsibility to back up and retain copies of such information and data.</li>
                  </ul>
                  <h2>Unauthorized use of Access Information</h2>
                  <ul>
                    <li>Formee Express is not responsible or liable in any way for any use of the Formee Express Solution (authorized or unauthorized) by any third party accessing the Formee Express Solution using your Access Information, and you accept all responsibility for such use of the Formee Express Solution and any consequences resulting from such use of the Formee Express Solution.</li>
                  </ul>
                  <h2>Use for Time Sensitive Applications</h2>
                  <ul>
                    <li>You agree that Formee Express will not be liable for any claims or damages arising from such use if you use the Formee Express Solution for a time sensitive use.</li>
                  </ul>
                  <h2>Availability of the Formee Express Solution</h2>
                  <ul>
                    <li>FORMEE EXPRESS WILL HAVE NO LIABILITY WHATSOEVER TO YOU OR ANY PARTY CLAIMING BY OR THROUGH YOU FOR THE TIMELINESS OR CONTINUED AVAILABILITY OF THE FORMEE EXPRESS SOLUTION.</li>
                  </ul>
                  <h2>Applicable Law</h2>
                  <ul>
                    <li>Some jurisdictions do not allow the exclusion of certain warranties or liability, so the above limitations or exclusions may not apply to you.</li>
                  </ul>
                  <h2>Viruses</h2>
                  <ul>
                    <li>The downloading and viewing of Content is done at your own risk. Formee Express cannot and does not guarantee or warrant that the Formee Express Solution or the Content are compatible with your computer system or that the Formee Express Solution, or any links from the Formee Express Solution or the Content, will be free of viruses, worms, trojan horses or disabling devices or other code that manifests contaminating or destructive properties. You are responsible for implementing safeguards to protect the security and integrity of your computer system, and you are responsible for the entire cost of any service, repairs or connections of and to your computer system that may be necessary as a result of your use of the Formee Express Solution.</li>
                  </ul>
                  <h2>Communications Not Confidential or Secure</h2>
                  <ul>
                    <li>Formee Express does not guarantee the confidentiality of any communications made by you through the Formee Express Solution, over the internet or over the telephone. Although Formee Express generally adheres to the accepted industry practices in securing the transmission of data to, from and through the Formee Express Solution, you understand, agree and acknowledge that Formee Express cannot and does not guarantee the security of data transmitted over the Internet or public networks in connection with your use of the Formee Express Solution.</li>
                  </ul>

                </div>
                <div id="Your-Indemnities" className="Show_term_content">
                  <h1>18. Your Indemnities</h1>
                  <ul>
                    <li>You will indemnify, defend and hold harmless Formee Express, and all of its officers, directors, employees and agents, its parent company, subsidiaries and affiliates, from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature, including reasonable legal and accounting fees, directly or indirectly due to, arising out of or in connection with:
                    <ul>
                        <li>your access to the Formee Express Solution, and any reliance on any Content obtained by you through the Formee Express Solution; or</li>
                        <li>your unauthorized use or misuse of the Formee Express Solution; or</li>
                        <li>your breach of this Agreement; or</li>
                        <li>the infringement, violation or misappropriation by you, or any third-party obtaining access to the Formee Express Solution through your Access Information, of any intellectual property or other right of any third person or entity; or</li>
                        <li>your violation of any Applicable Laws.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="Limitation-Liability" className="Show_term_content">
                  <h1>19. Limitation of Liability</h1>
                  <ul>
                    <li>To the maximum extent permitted under Applicable Law, in no event will Formee Express be liable, whether based on warranty, contract, tort, negligence, strict liability or any other legal theory, for any indirect, incidental, consequential, special, exemplary or punitive damages, lost profits, loss of use, loss of data, personal injury, fines, fees, penalties or other liabilities, whether or not Formee Express is advised of the possibility of such damages, resulting from or related to the use of, or the inability to make use of, the Formee Express Solution.</li>
                    <li>To the maximum extent permitted under Applicable Law, in no event will the total aggregate liability of Formee Express in connection with or under this Agreement or your use of, or inability to make use of, the Formee Express Solution, or for any other claim related in any way to your use of, or inability to make use of, the Formee Express Solution exceed the sum of $1,000 Australian dollars. For greater certainty, the existence of one or more claims under this Agreement will not increase the maximum liability amount.</li>
                    <li>Nothing in this Agreement limits Formee Express’s liability for fraud, personal injury or death to the extent found to be caused by Formee Express’s negligence or wilful misconduct.</li>
                    <li>The limitations in this Section reflect the allocation of risk between the Parties. The limitations specified in this Section will survive and apply even if any limited remedy specified in this Agreement is found to have failed of its essential purpose.</li>
                    <li>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.</li>
                  </ul>
                </div>
                <div id="term-General" className="Show_term_content">
                  <h1>20. General</h1>
                  <ul>
                    <li>Except as otherwise provided herein, the Parties rights and remedies under this Agreement are cumulative. The terms “include” and “including” mean, respectively, “include without limitation” and “including without limitation.” The headings of sections of this Agreement are for reference purposes only and have no substantive effect. Any rule of construction to the effect that any ambiguity in this Agreement will be resolved against the drafting party will not be applied to the interpretation of this Agreement.
</li>
                  </ul>
                  <h2>Force Majeure</h2>
                  <ul>
                    <li>Neither Party will be liable for delays caused by any event beyond its reasonable control, except non-payment of amounts due under this Agreement will not be excused by this provision.</li>
                  </ul>
                  <h2>Contracting Status</h2>
                  <ul>
                    <li>Nothing contained in this Agreement will be construed to create or imply a joint venture, partnership, principal-agent, or employment relationship between the Parties. Except as expressly authorized by Formee Express in writing, you will neither act nor purport to be acting as the legal agent of Formee Express, nor enter into any agreement on behalf of Formee Express or otherwise bind or purport to bind Formee Express in any manner whatsoever.</li>
                  </ul>
                  <h2>Notices </h2>
                  <ul>
                    <li>Any notices, reports or other communications required or permitted to be given under this Agreement will be in writing, including email, and will be sufficient if delivered by hand or sent by registered mail, courier or facsimile addressed to you or Formee Express at the respective addresses as advised in writing. Any such notices, reports, or other communications will be deemed to have been received by the Party to whom they were addressed: (i) upon delivery by hand, (ii) five business days after being sent by registered mail, (iii) upon delivery by courier, as evidenced by the courier receipt, (iv) upon successful receipt confirmation report after being sent by facsimile; or (v) if sent by email, upon receipt by the sender of a delivery receipt confirmation.</li>
                  </ul>
                  <h2>No Waiver</h2>
                  <ul>
                    <li>No waiver by either Party of a breach or omission by the other party under this Agreement will be binding on the waiving Party unless it is expressly made in writing and signed by the waiving Party. Any waiver by a Party of a particular breach or omission by the other Party will not affect or impair the rights of the waiving party in respect of any subsequent breach or omission of the same or different kind.</li>
                  </ul>
                  <h2>Severability</h2>
                  <ul>
                    <li>If any one or more of the provisions of this Agreement will for any reason be held to be invalid, illegal, or unenforceable in any respect, any such provision will be severable from this Agreement, in which event this Agreement will be construed as if such provision had never been contained herein.</li>
                  </ul>
                  <h2>Governing Law</h2>
                  <ul>
                    <li>This Agreement will be governed by and construed under the laws of Victoria, Australia. The Parties hereby waive any right to a trial by jury with respect to any lawsuit or judicial proceeding arising or relating to this Agreement. In construing, interpreting and enforcing this Agreement, choice of law principles will not apply. The Formee Express Solution are intended for use only in jurisdictions where they may be lawfully offered for use.</li>
                    <li>Except as restricted by Applicable Law, Preferred Partner hereby consents to the exclusive jurisdiction and venue of courts in Victoria, Australia in all disputes arising out of or relating to the use of the Formee Express Solution.</li>
                  </ul>
                  <h2>Entire Agreement/Modification</h2>
                  <ul>
                    <li>This Agreement constitutes the entire agreement between the Parties and supersedes all previous agreements and understandings relating to the subject matter hereof. This Agreement may not be altered, amended, or modified except by a written instrument signed by the duly authorized representatives of both Parties.</li>
                  </ul>
                  <h2>Electronic Agreement</h2>
                  <ul>
                    <li>You acknowledge and agree that by clicking on the “I AGREE” button (or similar buttons or links as may be designated by Formee Express to show your acceptance of this Agreement and/or your agreement to use the Formee Express Solution), you are entering into a legally binding contract. You hereby agree to the use of electronic communication in order to enter into contracts, place orders and create other records and to the electronic delivery of notices, policies and records of transactions initiated or completed through the Formee Express Solution, including the Application. Furthermore, you hereby waive any rights or requirements under any Applicable Laws in any jurisdiction which require an original (non-electronic) signature or delivery or retention of non-electronic records, to the extent permitted under Applicable Law. A printed version of this Agreement and of any notice given in electronic form will be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.  </li>
                  </ul>
                  <h2>English language </h2>
                  <ul>
                    <li>It is the express will of the Parties that this Agreement and all related documents have been drawn up in English. </li>
                  </ul>

                </div>
                <div id="term-Contact" className="Show_term_content">
                  <h1>21. Contact</h1>
                  <p> Any questions regarding this Agreement, or any questions, complaints, claims or other legal concerns relating to Formee Express or its business, should be directed to Formee Express at:</p>
                  <p>info@FormeeExpress.com<br></br>
                or<br></br>
                Formee Express Pty Ltd.<br></br>
                155-161 Boundary Road, <br></br>
                North Melbourne 3051<br></br>
                Victoria, Australia
</p>
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