import React from "react";
import ContactMain from "../components/ContactMain";
import NavBar from "../components/NavBar";
import FooterFour from "../components/FooterFour";
import { Helmet } from "react-helmet";


const Contact = () => {
  return (
    <>
      <Helmet>
  
  <title>Contact Us – Galileodata.us</title>
  <meta name="description" content="Get in touch with us at Galileodata.us. Contact us for all your data-driven solutions and marketing needs. We're here to help."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/contact-us/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Contact us"} /> */}

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Contact;
