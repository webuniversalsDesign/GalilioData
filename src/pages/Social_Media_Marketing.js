
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import socialmediaImg from '../img/SocialMedia Marketing-01.png';
import socialmediaContactImg from '../img/SocialMedia MarketingContact.png';
import { Helmet } from "react-helmet";
import MainContact from "../components/MainContact";
import Aboutani from "../components/Aboutani";

const Social_Media_Marketing = () => {
  return (
    <>
      <Helmet>
  
  <title>Social Media Marketing – Galileodata.us</title>
  <meta name="description" content="Amplify your brand's reach with Galileodata.us's Social Media Marketing services. We boost engagement and visibility to elevate your online presence."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/social-media-marketing/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Social Media Marketing"}
      subcontent={"Digital Media is the answer to approximately every question as the world is moving ahead and anywhere in those answers, your business wants to fit in. These days, business is not limited to transactions; the other aspects developing fame are web presence and word of mouth. We are in the middle of the top SMM companies and our result oriented approach gets your website online visibility with the better ranking and maximum Return on Investment."} />

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
            <Aboutani mainImg={socialmediaImg}></Aboutani>

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
                Social <span>Media Marketing</span> 
               
                </h2>

               

                    <p className='content mb-4 mb-xl-5 font-resp'>
                    Our Approach We use the number of SEO/SEM and SMM techniques to assist you to build
                     a strong and unparalleled reputation online. We examine your target audience, marketing objectives,
                      exclusive selling points, and offline uniqueness to offer a consistent message to target audiences
                       across online media. Our team injects positive content about your business on different search engines,
                        blogs, online media, social networking websites and forums</p>

                      <p className="content mb-4 font-resp">
                      We will discuss with you and offer information on how you can get the most out of your social media pages. 
                      Tell us about your business and we will design a social media plan that will reach your target audience and improve online engagement.
                      </p>

              </div>
            </div>
          </div>

        
        </div>
      </div>



        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      <MainContact conImg={socialmediaContactImg}></MainContact>

      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Social_Media_Marketing;
