import "./privacypolicy.css";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';

import pptbanner from "../../assets/img/perfferd-partner-banner.jpg";

function template() {

  window.scrollTo(0, 0);
  return (
    <div className="privacy_policy_page_wrapper">
      <div className="ppt_banner_img">
        <img src={pptbanner} alt="ppt_banner" />
      </div>
      <div className="privacy_page_content">
        <Container>
          <h1>Privacy Policy</h1>
          <p>Formee Express Pty Ltd. (“FormeeExpress,” “Formee”, “we,” “us,” or “our”) takes the privacy of your personal information seriously. We provide you with the ability to research prospective study opportunities at certain schools around the world, including information on visa requirements, and program information, and the ability to apply for admission to certain programs of such institutions through our “Preferred Partners” and our website and portal.
</p>
          <p>This Privacy Policy sets out the manner in which Formee Express collects, uses, discloses and otherwise manages personal information, including information collected directly from you or from our recruitment partners or through our website located at
 <a href="https://www.FormeeExpress.com">https://www.FormeeExpress.com</a> (“Website”).
</p>
          <p>Formee Express fully complies with Australia’s Privacy Act (1988).
</p>
          <p>The changes made to this Privacy Policy go into effect as at the date listed above and your continued use of Formee Express’s services and/or website after this date will be subject to our updated Privacy Policy.
</p>
          <h2>Collection and Use of Personal Information</h2>
          <h3>We may collect personal information when you:</h3>
          <ul>
            <li>Create an account</li>
            <li>Explore what programs you are eligible to apply to</li>
            <li>Create a student profile and/or apply to an educational program</li>
            <li>Use an Student account</li>
            <li>Use our Services for Visa Processing</li>
            <li>Use the ApplyProof service for document verification</li>
            <li>Post on our Website</li>
            <li>Communicate with us</li>
            <li>Provide information to third parties who we work with</li>
            <li>Payment Processing and tracking </li>
            <li>Sign up for marketing emails and other communications</li>
            <li>Participate in our surveys and customer research</li>
            <li>Sign up for contests and promotions</li>
            <li>Apply for employment at Formee Express</li>
            <li>Apply to become a recruitment partner</li>
          </ul>

          <p><b>Create an Account:</b> To access certain features on the Website, you are required to create an account and provide your email address and password or sign in with Facebook or Google. Your login information is used to create your account, and otherwise provide and administer the service you requested.
</p>
          <p><b>Explore What Programs You Are Eligible To Apply To:</b> You do not have to create an account to visit and browse certain features of our Website, such as to browse various schools and programs, read other content portions of the Website, or determine your eligibility for certain programs. If you choose to use our Website to discover programs you are eligible to apply for, we collect personal information such as your nationality, country of education, highest education, grading scheme, grade average, English/French exam score(s) and the disciplines or programs that you are interested in pursuing. Formee Express uses this information to create a list of programs and schools that you are eligible to apply to.
</p>
          <p><b>Create a Student Profile and/or Apply to an Educational Program:</b> In order to apply to an educational program, you (or the preferred partner acting as your legal representative) are required to create a student profile on our Website. The personal information we collect in your student profile helps us match you with schools and programs that fit your preferences and qualifications. This information may also be required by the school for the purposes of processing your application. This information may include your first and last name, email address, gender, date of birth, home and mailing address, passport details, marital status, emergency contact information, English or French language test score(s), educational preferences (such as preferred study destination and educational fields of interest), education history, volunteer experience, and other educational information.
</p>
          <p>Throughout the application process, you have the option to provide additional information such as documentation of awards and school projects. This information is not required to process your application but is recommended to enhance the success of your application.
</p>
          <p>We may use your profile information and other information about your use of the Website (such as search queries or other links you click on) to provide you with tailored school recommendations through the Website.
</p>
          <p><b>Use of Our Services for Visa Processing:</b> We offer students the option of processing their student visas through Formee Express. If you choose to use this service, we may collect personal information for the purposes of processing your visa application (if necessary), including passport details and information included on a visa application form.
</p>
          <p><b>Post On Our Website:</b> You have the ability to post information (e.g. questions, comments and opinions) through Formee Express’s services or on social media platforms, such as Facebook, LinkedIn, or Instagram. Please be advised that any personal information that you voluntarily post to any public forum will be available to other individuals and you should exercise caution when posting any personal information.
</p>
          <p><b>Communicate with Us: </b>When you contact us with a comment, question or complaint, you may be asked for information that identifies you (such as your name, address and a phone number) along with additional information we need to help us promptly answer your question or respond to your comment or complaint. We may also retain this information to assist you in the future and to improve our customer service, products, service offerings, events and promotions.
</p>
          <p><b>Provide Information to Third Parties Who We Work With:</b> We may obtain personal information about you through your legal representative, or a recruitment partner(s) who you are working with and who are using our services to process your application to schools. Occasionally, Formee Express will obtain information about you from third parties, such as mailing list providers and third-party service providers. Third-party providers are responsible for obtaining consent to provide personal information to us.
</p>
          <p><b>Payment Processing and transaction tracking:</b> Formee Express uses, with your consent, third party PCI certified payment service providers such as Stripe and Paypal.  Our applications are designed to directly connect our user’s security, transparently and cryptographically to the PCI certified payment processor. This ensures we maintain the privacy of your financial transactions. The payment processor provides Formee Express with a transaction number and status. This information is often required for Visa applications as proof of program payment as well as a demonstration of student commitment to their selected program.
</p>
          <p><b>Sign Up for Marketing Email and Other Communications:</b> We may offer you the ability to sign up to receive Formee Express marketing and promotional communications through the Website, on third party websites (including through social media sites), or educational events and information sessions. In these circumstances, we collect certain personal information (such as first and last name, email address or mobile phone number) which we use to send you email and other communications containing Formee Express updates, tips, and other content that may be of interest to you. You can opt out of receiving promotional email from us by following the “opt-out” or “unsubscribe” instructions provided in your email or text message, or by contacting us as set out below. Please note that you may continue to receive messages from us regarding your application or other transactional and account-related electronic messages from us.
</p>
          <p><b>Participate in Our Surveys and Customer Research:</b> From time to time, we may offer you the opportunity to participate in one of our surveys or other customer research. The information obtained through our surveys and customer research is used in an aggregated, non-personally identifiable format. We use this information to help us understand our customers and to enhance our product and service offerings, promotions, and events.
</p>
          <p><b>Sign Up for Contests and Promotions:</b> When you participate in a contest or promotion, we may collect your name, address, phone number, email address, and other information you provide. We use this information to administer your participation in the contest or promotion. If non-identifiable data is used for research purposes, then the limitation of liability and indemnity clauses if any contained within the Terms and Conditions are waived with respect to any harms suffered or liabilities incurred as a result of any research activities.
</p>
          <p><b>Apply for Employment at Formee Express:</b> In connection with a job application or related inquiry regarding potential employment with Formee Express, you may provide us with certain personal information about yourself (such as that contained in a resume, cover letter, or similar employment and education-related materials). We use this information for the purpose of processing and responding to your application for current and future career opportunities.
</p>
          <p><b>Apply To Become an Formee Express Preferred Partner:</b> In connection with applying to become a potential recruitment partner with Formee Express, you may provide us with certain personal information such as your first name, last name, address, email address, and personal information about your education and employment background. We use this information for the Preferred Partner.
</p>
          <h2>Sharing of Personal Information</h2>

          <p>We will not disclose, trade, rent, sell or otherwise transfer your personal information, without your consent.
</p>
          <h4>What organizations will process my personal information?</h4>

          <p>When you view or use www.FormeeExpress.com, or any website within Formee Express’s domains that referred you to this Privacy Policy, Formee Express Pty Ltd is the Controller.
</p>
          <p>This Privacy Policy applies to the use of your personal information (also known as “personal data”, “Personally identifiable information” or PII) by Formee Express Pty Ltd., including its research departments.
</p>
          <p><b>Schools:</b> We share the information in your application with the schools that you are applying to (either directly or through a third party on your behalf, within Australia or abroad). Once Formee Express has provided your information to these schools for your application for admittance, Formee Express does not have any control over the use of such information by these schools and recommends that you contact them directly if you have any questions about the manner in which your personal information is treated.
</p>
          <p><b>Partners:</b> From time to time, we may partner with third parties to provide benefits to registered members of the Website. With your consent, we may provide certain personal information to third parties so that they can contact you with information about the benefits and/or we may share aggregated, non-identifiable profile and usage data with third party partners for marketing and analytics purposes.
</p>
          <p><b>Business Transactions:</b> We may transfer any information we have about you as an asset in connection with a proposed or completed merger or sale (including transfers made as part of insolvency or bankruptcy proceedings) involving all or part of Formee Express or as part of a corporate reorganization or other change in corporate control.
</p>
          <p><b>Research and Development: </b> With your consent Formee Express uses your data internally for research and development to improve our existing products and services and/or create new features to serve you better. Formee Express also uses non-PII data “Metadata” for this same purpose.
</p>
          <p>With your consent, we may share your personal information with third parties involved in research and development to improve our existing products and services and/or create new features to serve you better. Such third parties may include educational institutions, academics, and others in similar fields.
</p>
          <p><b>Service Providers:</b> We may transfer (or otherwise make available) your personal information to third parties who provide services on our behalf. For example, we may use service providers such as cloud providers to send our emails, host the Website and data (including cloud providers) and operate certain of its features. Your personal information may be maintained and processed by third party service providers in the US, Malaysia, Australia or other jurisdictions. Our service providers are given the information they need to perform their designated functions, and we do not authorize them to use or disclose personal information for their own marketing or other purposes.
</p>
          <p><b>Legal Requirements:</b> Formee Express and our Australian, US and other service providers may provide your personal information in response to a search warrant or other legally valid inquiry or order, or to an organization in the case of a breach of an agreement or contravention of law, or as otherwise required or permitted by applicable Australian, US or other law. We may also disclose personal information where necessary for the establishment, exercise, or defence of legal claims, to detect, suppress or prevent fraud, and to investigate or prevent actual or suspected loss or harm to persons or property. Where you have engaged a Preferred Partner to submit your application to Formee Express, we may be required for legal, regulatory and/or compliance purposes to contact you directly to confirm certain information provided in connection with your application process.
</p>
          <h2>Data Retention</h2>

          <p>Formee Express will only retain your Personally Identifiable Information (PII), while it is needed to fulfill the intended purpose it was collected for or as required by law or contract which may extend beyond the termination of our relationship with you. Typically, PII data is maintained during the time you are engaged in the institutional program you applied to, or for up to a year following our last contact with you. We may retain certain data as necessary for legitimate business purposes, such as auditing, account recovery, or if required by applicable federal, state and provincial laws, to prevent fraud or future abuse, or by contract with a partner and/or institution. All retained PII will remain subject to the terms of this Privacy Policy.  If you request that your PII be removed from our databases and/or systems, it may not be possible to completely delete all your PII due to technological and legal constraints. However, we will take such steps as are reasonable to destroy the information or to ensure that the information is de‑identified.  Should you request additional services from Formee Express which are subject to this Privacy Policy, you will be authorizing the extension of the data collection and/or processing purpose as a result.
</p>
          <p>Document(s) will be retained for as long as they are needed for the intended purpose or as required by law or contract which may extend beyond the termination of our relationship with you. The entity, student or institutional partner which has uploaded the document(s) for verification may request premature deletion of uploaded files. This is most likely to occur in the case where a content correction or update is required.
</p>
          <h4>Safeguards</h4>
          <p>Formee Express takes the safeguarding of your information very seriously. We have implemented reasonable administrative, technical and physical safeguards in an effort to protect against unauthorized access, use, modification and disclosure of personal information in our custody and control, including limiting access to our database to legitimate users and employing device encryption and version tracking.
</p>
          <h4>Your Rights</h4>
          <ul>
            <li>Access </li>
            <li>Correction (Right to rectification)</li>
            <li>The right to withdraw or be forgotten</li>
            <li>The right to report or complain</li>
          </ul>
          <p>You may access, update and correct inaccuracies in your personal information in our custody or control at any time, subject to limited exceptions prescribed by law. Simply log into your account, go to your account profile, and make the necessary changes.
</p>
          <p>You can also request access, corrections or updates to other personal information in our records by contacting us as set out below. We may request certain personal information for the purposes of verifying the identity of the individual seeking access to their personal information records.
</p>
          <p>You may request your data be withdrawn (forgotten); this type of request can be performed assuming Formee Express is in a legal position to fulfill such a request. You must not have an active study application where financial or billing records are or may be in process should an application to a third-party service be engaged. Should Formee Express be able to comply to your request, only the PII data you provided will be forgotten. Non-PII data, “Metadata” will be maintained regardless.
</p>
          <p>Should you wish to lodge a concern of complaint to Formee Express, please contact us as set out below. We will respond to your concerns in a reasonable time, typically within 10 business days.
</p>
          <h2>Cookies and Additional Information </h2>

          <h4>About the Website</h4>
          <p><b>Visiting the Website:</b> In general, you can visit the Website without telling us who you are or submitting any personal information. However, we collect the IP (Internet protocol) addresses of all visitors to the Website and other related information such as page requests, browser type, operating system and average time spent on the Website. We use this information to help us understand the Website activity, to monitor and improve the Website and, if you have registered and created a profile on the Website, to send you tailored recommendations for educational programs.
</p>
          <p><b>Cookies:</b> Our Website uses a technology called “cookies”. A cookie is a tiny element of data that the Website can send to your browser, which may then be stored on your hard drive so we can recognize you when you return. We use cookies on the pages of the Website where you are prompted to log in or that are customizable. If you have registered with our Website, these cookies (1) may let us know who you are, (2) may be necessary to access your account information (stored on our computers) in order to provide personalized services, and (3) will provide us and our service providers with information that we will use to personalize the Website in accordance with your preferences and interests. You may set your Web browser to notify you when you receive a cookie or to not accept certain cookies. However, if you decide not to accept cookies from the Website, you may not be able to take advantage of all of the features of the Website.
</p>
          <p><b>To better serve you:</b> Formee Express uses the web analytics services from Google Analytics to collect standard internet log information. They use cookies to help us analyze how visitors use the Website. For example, with Google Analytics, the information generated by the cookie about your use of the Website (including your IP address) will be transmitted to and stored by a Google server. Google uses this information for the purpose of evaluating your use of the Website, compiling reports on Website activity for Website operators, and providing Website operators with other services relating to Website activity and internet usage. You can prevent the storage of data relating to your use of the Website and created via the cookie (including your IP address) by Google, as well as the processing of this data by Google, by downloading and installing the browser plug-in available at the following link: https://tools.google.com/dlpage/gaoptout?hl=en.
</p>
          <p>You can also obtain additional information on Google Analytics’ collection and processing of data and data privacy and security at the following links: https://policies.google.com/technologies/partner-sites and https://support.google.com/analytics/topic/2919631.
</p>
          <p>Formee Express also uses Google OCR, “Optical Character Recognition” service to convert your uploaded images into text for data import into your selected Formee Express’s applications for the sole purpose of eliminating processing errors in your selected program application while decreasing processing times.
</p>
          <p><b>Tracer Tags & Web Beacons:</b> Our Website may also use a technology called “tracer tags” or “Web Beacons”. This technology allows us to understand which pages you visit on our Website. These tracer tags are used to help us optimize and tailor our Website for you and other future visitors to our Website.
</p>
          <p><b> Links to Other Websites:</b> Our Website may contain links to other websites that Formee Express does not own or operate, including the websites of third-party partners. Also, links to our Website may be featured on third party websites on which we advertise. Except as provided herein, we will not provide any of your personal information to these third parties without your consent. We provide links to third party websites as a convenience to the user. These links are not intended as an endorsement of or referral to the linked websites. The linked websites have separate and independent privacy statements, notices and terms of use, which we recommend you read carefully. We do not have any control over such websites, and therefore we have no responsibility or liability for the manner in which the organizations that operate such linked websites may collect, use or disclose, secure and otherwise treat your personal information.
</p>
          <p><b>Social Media: </b> We may offer you the opportunity to engage with our content on or through third-party social networking websites, plug-ins, and applications. When you engage with our content on or through third-party social networking websites, plug-ins and applications, you may allow us to have access to certain information associated with your social media account (e.g., name, username, email address, profile picture) to deliver the content or as part of the operation of the website, plug-in or application. When you provide information from your social media account, we may use this information to personalize your experience on the Website and on the third-party social networking websites, plug-ins and applications, and to provide you with other products or services you may request.
</p>
          <h2>Transferring Your Information Around the Globe</h2>
          <p>As Formee Express expands its service reach around the globe we may need to transfer your information to regions around the world to provide you the services and products you require. This will most likely occur when you request services from our third-party institutional providers outside of your country of origin. Such regions could include, but are not limited to, Australia, Malaysia, the United Kingdom (UK), the European Economic Area (EEA), Canada or the USA for example.
</p>
          <h4>Online Ads/Interest-Based Advertising</h4>
          <p>We work with third parties such as ad networks and other advertising companies that use their own tracking technologies (including cookies and pixel tags) on our Website in order to provide you with tailored advertisements across the Internet. These companies may collect information about your activity on our Website and third-party websites (such as web pages you visit and your interaction with our advertising and other communications) and use this information to make predictions about your preferences, develop personalized content and deliver ads that are more relevant to you on third party websites. This information may also be used to evaluate the effectiveness of our online advertising campaigns.
</p>
          <p><b>Custom Audience:</b> We may also use services provided by third-party platforms (such as social networking and other websites) to serve targeted advertisements on such platforms to you or others, and we may provide a hashed version of your email address or other information to the platform provider for such purposes. To opt out of the use of your information for such purposes, please contact us at info@FormeeExpress.com.
</p>
          <h4>Changes to Our Privacy Policy</h4>
          <p>This Privacy Policy may be updated periodically to reflect changes to our personal information practices. The revised Privacy Policy will be posted on the Website. We strongly encourage you to please refer to this Privacy Policy often for the latest information about our personal information practices.
</p>
          <h4>Contact Us</h4>
          <h5>Please contact us if:</h5>
          <ul>
            <li>You have any questions or comments about this Privacy Notice</li>
            <li>You wish to access, update, and/or correct inaccuracies in your personal information, or</li>
            <li>You otherwise have a question or complaint about the manner in which we or our service providers treat your personal information.</li>
            <li>You may contact us by email at <a href="mailto:info@FormeeExpress.com">info@FormeeExpress.com</a> or by mail at the following address:</li>
          </ul>
          <div className="term_Contact">
            Formee Express Pty Ltd.<br></br>
155-161 Boundary Road, <br></br>
North Melbourne 3051<br></br>
Victoria, Australia
</div>


        </Container>
      </div>
    </div>
  );
};

export default template;
