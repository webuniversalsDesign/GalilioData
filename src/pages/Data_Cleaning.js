import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import datacleanImg from '../img/DataCleaning01.png'
import datacleanContactImg from '../img/dataCleaningContact.png'
import { Helmet } from "react-helmet";
import MainContact from "../components/MainContact";
import Aboutani from "../components/Aboutani";

const Data_Cleaning = () => {
  return (
    <>
      <Helmet>
  
  <title>Data Cleansing – Galileodata.us</title>
  <meta name="description" content="GalileoData.us provides expert Data Cleansing services, ensuring your data is accurate, reliable, and optimized for decision-making."/>
  {/* <meta name="keywords" content="about"/> */}
  <link rel="canonical" href="https://galileodata.us/data-cleansing/" />

</Helmet>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Data Cleansing and Enrichment Services"}
      subcontent={"Galileo data B2B Data Segmentation service adds guaranteed deliverable email addresses to your existing corporate postal database."} />

      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
            <Aboutani mainImg={datacleanImg}></Aboutani>
          
            </div>
            <div
              className='col-lg-7'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>Data Cleaning</h6>
                <h2 className='title'>
                <span>Data Cleansing</span>   and Enrichment Services

                </h2>

               

                    <p className='content mb-4 mb-xl-5 font-resp'>
                    We facilitate our clients in taking strong and optimistic business decisions by cleansing and updating their
                     valuable databases regularly. At Galileo data, we employ latest techniques to clean, de-duplicate, standardize,
                      normalize, verify and validate critical data or information of your company. Also, our data cleansing and enrichment
                       services team ensures that your products, marketing and clients databases are current, accurate and complete so that
                        you can carry out successful marketing campaigns and business processes. The process of data cleansing is multi-faceted
                         and a number of problems must be addressed to solve any particular data-cleansing problem. Our data enrichment
                          professionals provide comprehensive data cleansing services to
                     our clients for maintaining their data records accurately also, we reduce unnecessary costs wastage associated.</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* Work Process One */}
          {/*==================== Work Process One start ====================*/}
          <div className='work-process-area pd-top-100'>
        <div className='container'>
       
        <div className="row pb-5">
            <div className="col-lg-12">

            <div className='section-title'>
            <h2 className='title'>
         
         Why choose us for <span>Data Cleansing</span> services?

            </h2>
            {/* <h6 className='sub-title mt-3'>8 Steps to aggregating your targeted email lists</h6> */}

        
          </div>
            </div>

            <div className="row pt-2">

                 <div className="col-lg-6">
<p className="font-resp">Galileo Data offers all type of data cleansing, data analysis, data scrubbing, data enrichment and
 data verification services. Outsourcing data cleansing services to us in India ensures an accurate and
  up-to-date database, which yields the business results as per your desire. Our data cleansing service 
  covers several functions, depending on the type of data and client specific need.</p>
            </div>

            <div className="col-lg-6">
            <p className="font-resp">Our clients are able to take the headache out of data cleansing problems by outsourcing data enrichment services to us.
             A data cleansing / enrichment service bureau like DOI with its expertise 
            over the last several years can automate the process for greater quality, capacity, turnaround and value.</p>
            </div>
            </div>
           
        </div>

     
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}

        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      
      <MainContact conImg={datacleanContactImg}></MainContact>

      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Data_Cleaning;
