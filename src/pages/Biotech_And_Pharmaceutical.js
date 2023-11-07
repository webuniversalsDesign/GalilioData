import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import Boitech from "../img/Biotech _ Pharmaceutical-01.png"
import Boitech2 from "../img/Biotech _ Pharmaceutical_2-01.png"

import { FaCheckCircle } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import MainContact from "../components/MainContact";
import Aboutani from "../components/Aboutani";

const Biotech_And_Pharmaceutical = () => {
  return (
    <>
      <Helmet>
  
  <title>Biotech & Pharmaceutical Email List – Galileodata.us</title>
  <meta name="description" content="Access our Biotech & Pharmaceutical Email List at Galileodata.us for targeted outreach and connections in the life sciences industry."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/biotech-pharmaceutical-email-list/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Biotech & Pharmaceutical Email List"}
      subcontent={"The Pharmaceutical and Biotechnology Email Subscriber file is comprised of individuals looking to stay on top of how leading pharmaceutical and biotechnology researchers are applying the latest discovery tools and development techniques and furthering the process of discovering. When your company’s marketing campaign fails, it can be a bitter pill to swallow. With the right information at your disposal, you can find and communicate with people who may be interested in the pharmaceutical product or service you have to sell. Whether you want to email leads or network with the top players in the industry who may be interested in the new healthcare product, or service that you have to offer, you can do this a lot more efficiently with the help of a consistent and well-consolidated contact database."} />

      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
            <Aboutani mainImg={Boitech}></Aboutani>

            </div>
            <div
              className='col-lg-7'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Automotive</h6> */}
                <h2 className='title'>
                Our <span>Biotech & Pharmaceutical</span>  Email List offers
                
                </h2>
              
                <ul className='single-list-inner style-check style-check mbpd-top-90'>

                          <li className="pt-3 font-resp">
                            <FaCheckCircle /> Galileo Data offers the most comprehensive and complete lists of Pharmaceutical & Biotechnology Executive Contact Databases available on the market.
                          </li>

                          <li className="pt-3 font-resp">
                            <FaCheckCircle /> Contrary to list brokers and other list compilers, Galileo Data offers its clients the opportunity to acquire databases by delivering the actual 
                            databases, allowing companies and individuals to use the data for email marketing, direct mailings, and telephone lead generation.
                          </li>

                          <li className="pt-3 font-resp"> <FaCheckCircle /> Developed in cooperation with leading Pharmaceutical Industry Marketing Executives, Galileo Data 
                            is the only list company offering full contact information on key executive contacts of the pharmaceutical industry, and allowing business 
                            to business marketers to use a multi-channel database by tapping in on email marketing, direct mail and telephone.
                          </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row pd-bottom-100'>
                      <div className='col-md-12 mt-5'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                        
                         <li className="font-resp">
                            <FaCheckCircle /> This list targets professionals and scientists at top pharmaceutical companies, biopharmaceutical 
                            companies, biotechnology companies, contract research organizations, government laboratories, university and hospital laboratories and medical 
                            centers, and instrument and system manufacturers, in order to maximize the results of your next marketing​
                          </li>
                        </ul>
                      </div>


                    
                    </div>
        </div>
      </div>

        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      <MainContact conImg={Boitech2}></MainContact>
      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Biotech_And_Pharmaceutical;
