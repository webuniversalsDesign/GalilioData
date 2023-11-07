import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer_GDRP = () => {
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
            <a href="tel:+(08)-387-214-032">   <div className='media bg-base-2'>
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
            <div className='col-lg-12 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>About Us</h4>
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    <li style={{textAlign:"justify"}}>
                   
                    The Future of marketing belongs to those who can turn data into information into 
                    insights,and insights into an unwavering commitment to serving customers to the best of their abilities.
                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='#' className='sky'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Industrial List</h4>
                <ul>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/automobile-automotive-email-list/'>
                      <FaChevronRight /> Automotive Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/banking-and-financial-email-list/'>
                      <FaChevronRight /> Banking & Financial Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/biotech-pharmaceutical-email-list/'>
                      <FaChevronRight /> Biotech & Pharmaceutical Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/construction-industry-email-list/'>
                      <FaChevronRight /> Construction Industry Email List
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/education-email-list/'>
                      <FaChevronRight /> Education Email List
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/hospitality-email-list/'>
                      <FaChevronRight /> Hospitality Email List
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/information-technology-email-list/'>
                      <FaChevronRight /> Information Technology Email List
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Industrial List</h4>
                <ul>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/logistic-and-distribution-email-list/'>
                      <FaChevronRight /> Logistic & Distribution Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/manufacturing-email-list/'>
                      <FaChevronRight /> Manufacturing Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/retail-email-list/'>
                      <FaChevronRight />Retail Email List
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/telecommunication-company-email-list/'>
                      <FaChevronRight /> TeleCom Email List
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/travel-and-tourism-email-list/'>
                      <FaChevronRight /> Travel & Tourism Email List
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/utility-energy-email-list/'>
                      <FaChevronRight />Utility & Energy Email List
                    </Link>
                  </li>

               
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Data Solutions</h4>
                <ul>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/data-cleansing/'>
                      <FaChevronRight /> Data Cleansing
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/data-appending/'>
                      <FaChevronRight /> Data Appending
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/data-segmentation/'>
                      <FaChevronRight /> Data Segmentation  
                    </Link>
                  </li>
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/data-verification/'>
                      <FaChevronRight /> Data Verification
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/reverse-appending/'>
                      <FaChevronRight /> Reverse Appending
                    </Link>
                  </li>

                  <li className='sky'>
                    Digital Marketing
                  </li>
               
                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='/social-media-marketing/'>
                      <FaChevronRight /> Social Media Marketing
                    </Link>
                  </li>

                  <li className='sky' style={{fontSize:"13px", fontWeight:"300"}}>
                    <Link to='web-design/'>
                      <FaChevronRight /> Web Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Headquarters</h4>
                <ul className='details text-white'>
                    <li style={{fontSize:"13px", fontWeight:"300"}}>
                      <FaMapMarkerAlt className='sky' />
                      2150 SOUTH, 1300 EAST , 500 PMB #1771,
SALT LAKE, UT 84106 UNITED STATES
                    </li>
                    <li className='mt-3' style={{fontSize:"13px", fontWeight:"300"}}>
                      <FaPhoneAlt className='sky' /> +1 646-461-2757
                    </li>
                    <li className='mt-2' style={{fontSize:"13px", fontWeight:"300"}}>
                      <FaEnvelope className='sky' /> info@galileodata.us
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
              <Link to='/TermsCondition' className="font-resp">Terms &amp; Condition</Link>
                <Link to='/PrivacyPolicy' className="font-resp">Privacy Policy</Link>
                <Link to='/Contact' className="font-resp">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default Footer_GDRP;
