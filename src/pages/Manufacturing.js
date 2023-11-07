import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import manufacturing1 from "../img/Manufacturing-01.png"
import touch from "../img/Manufacturing get in touch-01.png" 

import { FaCheckCircle } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import MainContact from "../components/MainContact";
import Aboutani from "../components/Aboutani";

const Manufacturing = () => {
  return (
    <>
      <Helmet>
  
  <title>Manufacturing Email List – Galileodata.us</title>
  <meta name="description" content="Discover growth prospects in the manufacturing sector with our Manufacturing Email List at Galileodata.us. Connect with industry professionals for business development."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/manufacturing-email-list/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Manufacturing Email List"}
      subcontent={"Most marketers acquire a Manufacturing email list that comprises of outdated email addresses or email addresses of random contacts. Either way, such marketers do not get much help from this type of list. Ideally, a customized direct mailing address list of targeted manufacturers should be purchased to approach all the industry verticals. To aid the most gainful marketing venture, Galileo Data offers its highly responsive manufacturer mailing database."} />

      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
            <Aboutani mainImg={manufacturing1}></Aboutani>

            </div>
            <div
              className='col-lg-7'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Education</h6> */}
                <h2 className='title'>
                Why you should opt for <span>Manufacturing Industry</span> Mailing Lists from Galileo Data?
                
                 
                </h2>
               
              
                   <ul className='single-list-inner style-check style-check mb-3 pt-4'>
                   <li className="font-resp"> <FaCheckCircle /> With Manufacturing Industry Mailing List, you will be able to select the best Manufacturing industry
                    leads for your needs based on geography, practice type, practice size and more.</li>
                   <br/>
                   <li className="font-resp"> <FaCheckCircle />By targeting the managers and executives, within the
                    industries of interest, you'll be able to effectively and efficiently
                     close sales and boost profits.</li>
                     <br/>
                   
                   <li className="font-resp"> <FaCheckCircle />Our Manufacturing Industry directory is detailed 
                   and comprehensive, email and tele-verified, permission based, accurate and 
                   up-to-date and developed with utmost precision and adherence to client business needs.</li>

                   </ul>

              
              </div>
            </div>
          </div>

          <div className="row pt-5 ">
          <h4 className="pb-4">Our professional experts can modify your manufacturing industry list by</h4>
            <div className="col-lg-5">
            <ul className='single-list-inner style-check style-check mb-3'>

            <li className="font-resp"> <FaCheckCircle />Tire Manufacturers Email List</li>
            
            <li className="font-resp"> <FaCheckCircle />Electronics Products Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle /> Transportation Equipment Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle /> Rubber & Plastics Items Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle /> Printing items Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Leather Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Steel Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Furniture Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle /> Electrical products Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Aerospace Equipment Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Construction Material Manufacturers Email List</li>

</ul>
            </div>

            <div className="col-lg-7">
            <ul className='single-list-inner style-check style-check mb-3'>

            <li className="font-resp"> <FaCheckCircle /> Semiconductor Manufacturers Mailing List</li>

            <li className="font-resp"> <FaCheckCircle />Aerospace Equipment Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Vehicles Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Paper Products Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Textile & Apparel Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Healthcare Products/ Equipment Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Chemical Products Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle /> Technology Products Manufacturers Email List</li>

            <li className="font-resp"> <FaCheckCircle />Agriculture items Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />PrintinaGlass Manufacturers Email Lisg items Manufacturers Email List</li>
            <li className="font-resp"> <FaCheckCircle />Primary Metal Industries Manufacturers Email List</li>

            </ul>
            </div>

            <div className="col-lg-4">
            <ul className='single-list-inner style-check style-check mb-3'>





            </ul>
            </div>

          </div>
        </div>
      </div>


        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      <MainContact conImg={touch}></MainContact>

      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Manufacturing;
