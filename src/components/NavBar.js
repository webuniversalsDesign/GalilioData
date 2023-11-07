import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../../src/img/logo/galileodata-white-logo.png';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

// active class in navbar
const [selectedMenuItem, setSelectedMenuItem] = useState(
  localStorage.getItem('selectedMenuItem') || null
);

// Handle menu item click
const handleMenuItemClick = (menuItemId) => {
  // Update the selected menu item
  setSelectedMenuItem(menuItemId);

  // Save the selected menu item to localStorage
  localStorage.setItem('selectedMenuItem', menuItemId);
};

// Use useEffect to load the selected menu item from localStorage on initial render
useEffect(() => {
  const savedSelectedMenuItem = localStorage.getItem('selectedMenuItem');
  if (savedSelectedMenuItem) {
    setSelectedMenuItem(savedSelectedMenuItem);
    console.log(savedSelectedMenuItem)
  }
}, []);

  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* navbar start */}
      <nav className='navbar navbar-area navbar-expand-lg'>
        <div className='container nav-container navbar-bg'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='img' />
            </Link>
          </div>
          {/* <div className='nav-right-part nav-right-part-mobile'>
            <span className='search-bar-btn' onClick={searchActive}>
              <FaSearch />
            </span>
          </div> */}
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us/' >About Us</Link></li>
 <li className='menu-item-has-children'>
                <a href='#'>Our Data</a>
                <ul className='sub-menu'>
                <li>
                    <Link to='/automobile-automotive-email-list/'>Automotive</Link>
                  </li>
                  <li>
                    <Link to='/banking-and-financial-email-list/'>Banking And Financial</Link>
                  </li>
                  <li>
                    <Link to='/biotech-pharmaceutical-email-list/'>Biotech And Pharmaceutical</Link>
                  </li>
                  <li>
                    <Link to='/construction-industry-email-list/'>Construction Industry</Link>
                  </li>
                  <li>
                    <Link to='/education-email-list/'>Education</Link>
                  </li>

                  <li>
                    <Link to='/hospitality-email-list/'>Hospitality</Link>
                  </li>

                  <li>
                    <Link to='/information-technology-email-list/'>Information Technology</Link>
                  </li>

                  <li>
                    <Link to='/logistic-and-distribution-email-list/'>Logistic and Distribution</Link>
                  </li>

                  <li>
                    <Link to='/manufacturing-email-list/'>Manufacturing</Link>
                  </li>

                  <li>
                    <Link to='/retail-email-list/'>Retail</Link>
                  </li>
                  
                  <li>
                    <Link to='/real-estate-email-list/'>Real Estate</Link>
                  </li>

                  <li>
                    <Link to='/telecommunication-company-email-list/'>Telecommunication Company</Link>
                  </li>

                  <li>
                    <Link to='/travel-and-tourism-email-list/'>Travel and Tourism</Link>
                  </li>

                  <li>
                    <Link to='/utility-energy-email-list/'>Utility And Energy</Link>
                  </li>
                </ul>
              </li>

             
              <li className='menu-item-has-children'>
                <a href='#'>Data Solutions</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/data-cleansing/'>Data Cleansing</Link>
                  </li>

                  <li>
                    <Link to='/data-appending/'>Data Appending</Link>
                  </li>

                  <li>
                    <Link to='/data-segmentation/'>Data Segmentation</Link>
                  </li>

                  <li>
                    <Link to='/data-verification/'>Data Verifiction</Link>
                  </li>

                  <li>
                    <Link to='/reverse-appending/'>Reverse Appending</Link>
                  </li>

                  
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Digital Marketing</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/social-media-marketing/'>Social Media Marketing</Link>
                  </li>
                  <li>
                    <Link to='/web-design/'>Web Design</Link>
                  </li>
              
                </ul> 
              </li>
              <li className='menu-item-has-children'>
                <Link to="/gdpr-compliant/">GDPR</Link>
               <ul className='sub-menu'>
                  
                  <li>
                    <Link to='/RDPSC'>RDPCS</Link>
                  </li>
                </ul> 
              </li>
              <li>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
