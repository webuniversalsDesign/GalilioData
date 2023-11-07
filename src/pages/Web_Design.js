
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import webDesignImg from '../img/WebDesign-01.png';
import webDesignContactImg from '../img/WebDesignContact.png';
import { Helmet } from "react-helmet";
import MainContact from "../components/MainContact";
import Aboutani from "../components/Aboutani";

const Web_Design = () => {
  return (
    <>
      <Helmet>
  
  <title>Web Design – Galileodata.us</title>
  <meta name="description" content="Galileodata.us: Elevate your brand with custom Web Design, creating user-friendly websites to strengthen your online presence and customer engagement."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/web-design/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Web Design"}
      subcontent={"Web design includes a lot of skills in the production and maintenance of websites. The different areas of web design comprise web graphic design, interface design, authoring, as well as standardized code and proprietary software, user experience design and search engine optimization."} />

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
            <Aboutani mainImg={webDesignImg}></Aboutani>

            </div>
            <div
              className='col-lg-8'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Social Media Marketing</h6> */}
                <h2 className='title'>
                Web <span>Design</span> 

                </h2>

               

                    <p className='content mb-4 mb-xl-5 font-resp'>
                    Galileo Data offer only state of the art, cutting edge technology and are for all time creating new and original ways 
                    to make our customers’ experience better. If you are searching for a trusted reputable Web Design corporation to grip 
                    all of your online business wants then look no further. We recommend complete solutions for all industries 
                    and can meet the demands of any business, and have been ranked one of the most excellent Web Design Companies to do business.</p>

                      <p className="content mb-4 font-resp">
                      We are a premium web design and development company that offers a broad range of solutions for both small to large companies globally. We dedicated in rich interactive experiences in Web, designing the long time.
We are a close team of creative’s, web designers & web developers who work jointly to create beautiful, engaging digital experiences. We take arrogance in delivering only the most excellent.
                      </p>

              </div>
            </div>
          </div>

        
        </div>
      </div>



        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      <MainContact conImg={webDesignContactImg}></MainContact>
   
      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Web_Design;
