import React from 'react';
import twoIconImg from '../img/icons/2-1.png';
import threeIconImg from '../img/icons/3.png';
import ovelIconImg from '../img/icons/5.svg';

const Aboutani = ({mainImg}) => {
  return (
    <>
       <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src={twoIconImg}
                  alt='img'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src={threeIconImg}
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src={ovelIconImg}
                  alt='img'
                />
                <img
                  className='main-img'
                  src={mainImg}
                  alt='img'
                />
              </div> 
    </>
  )
}

export default Aboutani
