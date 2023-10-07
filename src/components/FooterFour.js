import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ourCompl from '../img/symbols/our-commplance.jpg'

import logo from '../../src/img/logo/galileodata-white-logo.png';


const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className='footer-area bg-cover mt-0 pd-top-120'
        style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >
        <div className='footer-subscribe'>
          <div className='container'>
            <div className='footer-subscribe-inner box-shadow style-2 bg-white p-0 bg-cover'>
             <a href="tel:+(08)-387-214-032"> <div className='media bg-base-2'>
                <div className='media-left me-3 align-self-xl-center'>
                  <img src='assets/img/icon/40.svg' alt='img' />
                </div>
              <div className='media-body'>
                  <h6 className='text-white'>+(08)-387-214-032</h6>
                  <p className='mb-0 text-white'>Need Advice?</p>
                </div>  
              </div></a>
              <div className='row align-self-center'>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Name' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='border-1'>
                    <input type='text' placeholder='Your Email' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <a
                    className='btn w-100 btn-black sky border-radius-0'
                    href='#'
                  >
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>About Us</h4>
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    <li>
                   
                    The Future of marketing belongs to those who can turn data into information into 
                    insights,and insights into an unwavering commitment to serving customers to the best of their abilities.
                    </li>
                  </ul>

                  <Link to='/'> <img src={logo} className="footerLogo" alt="footerlogo"/></Link>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='https://www.linkedin.com/company/galileo-data-inc/?viewAsMember=true' target="_blank" rel="noreferrer" className='sky'>
                        <FaLinkedin />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Important Links</h4>
                <ul>
                  <li className='sky'>
                    <Link to='/'>
                      <FaChevronRight /> Home
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/About'>
                      <FaChevronRight /> About Us
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/GDRP_Complaint'>
                      <FaChevronRight /> GDRP - Complaint
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/contact'>
                      <FaChevronRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Digital Marketing</h4>
                <ul>
                  <li className='sky'>
                    <Link to='/Social_Media_Marketing'>
                      <FaChevronRight /> Social Media Marketing
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/Web_Design'>
                      <FaChevronRight /> Web Design
                    </Link>
                  </li>
                  <li className='sky' style={{fontWeight:"600", fontSize:"20px"}}>
                      Data Solution
                  </li>
                  <li className='sky'>
                    <Link to='/Data_Cleaning'>
                      <FaChevronRight /> Data Cleansing
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/Data_Appending'>
                      <FaChevronRight /> Data Appending
                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/Data_Segmentation'>
                      <FaChevronRight /> Data Segmentation
                    </Link>
                  </li>

                  <li className='sky'>
                    <Link to='/Data_Verification'>
                      <FaChevronRight /> Data Verification
                    </Link>
                  </li>

                  <li className='sky'>
                    <Link to='/Reverse_Appending'>
                      <FaChevronRight /> Reverse Appending
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Headquarters</h4>
                <ul className='details text-white'>
                    <li>
                      <FaMapMarkerAlt className='sky' />
                      2150 SOUTH, 1300 EAST , 500 PMB #1771,
SALT LAKE, UT 84106 UNITED STATES
                    </li>
                    <li className='mt-3'>
                     <a href="tel:+1 646 461 2757"><FaPhoneAlt className='sky' /> &nbsp; &nbsp; 646-461-2757</a> 
                    </li>
                    <li className='mt-2'>
                     <a href="mailto:info@galileodata.us"><FaEnvelope className='sky' />&nbsp; &nbsp; info@galileodata.us</a> 
                    </li>

                    <li className='sky' style={{fontWeight:"600", fontSize:"20px"}}>
                    Our Compliance

                    <img src={ourCompl} alt="" className="footer-icon"/>
                  </li>


                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>Copyright © 2023 Galileo Data Inc. All rights reserved.</p>
              </div>
              <div className='col-md-6 text-lg-end'>
           
                <Link to='/TermsCondition'>Terms &amp; Condition</Link>
                <Link to='/PrivacyPolicy'>Privacy Policy</Link>
                <Link to='/Contact'>Contact Us</Link>
            
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
