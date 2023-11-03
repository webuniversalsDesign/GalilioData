import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from '../img/HomeBanner.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper/modules';
import Typed from 'typed.js';


const BannerFive = () => {
 // Create reference to store the DOM element containing the animation
 const el = React.useRef(null);

 React.useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Traffic','Leads','Revenue','Marketshare','Brand', 'Profit',  ],
    typeSpeed: 150,
    backSpeed:150,
    loop:true,
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);

  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 pb-0 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-5/5.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 pb-xl-5 align-self-center'>
              <div className='banner-inner pe-xl-4 pb-5'>
          
              {/* <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor:"black", JustifyContent:"start"}}>
      <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your profit</h2>
      </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"black", JustifyContent:"start"}}>
        <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your  marketshare</h2>
      </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"black", JustifyContent:"start"}}>
      <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your revenue</h2>
      </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"black", JustifyContent:"start"}}>
      <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your brand</h2>
      </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"black", JustifyContent:"start"}}>
      <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your leads</h2>
      </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"black"}}>
      <div className="slider-text">
        <h2    data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500' className='title text-white'>Grow your traffic</h2>
      </div>
        </SwiperSlide>
   
      </Swiper> */}

                <h2
                  className='title text-white'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                 Grow Your   <span ref={el} className="auto-type"/> </h2>
                <p
                  className='content pe-xl-4'
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                Make your business take flight with “Galileo Data” Unleash your marketing desire with us. Identify new clients & boost profits.​
                </p>
                <Link
                  className='btn btn-border-base-2'
                  data-aos='fade-right'
                  data-aos-delay='450'
                  data-aos-duration='1500'
                  to='/about'
                >
                  
                  Read More <FaPlus />
                </Link>
                <div
                  className='d-inline-block align-self-center '
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                  {/* <a
                    href='javascript:void(0)'
                    onClick={() => setOpen(true)}
                    className='video-play-btn-hover'
                  >
                    <img src='assets/img/video.svg' alt='img' />{" "}
                    <h6 className='d-inline-block text-white'>how we work</h6>
                  </a> */}

                  <div></div>
                </div>
                {/* <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='XM6kTQPzzpQ'
                  onClose={() => setOpen(false)}
                /> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-9 align-self-end'>
              <div className='banner-thumb-2 mt-4 mt-lg-0'>
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-5/4.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-3 top_image_bounce'
                    src='assets/img/banner-5/3.png'
                    alt='img'
                  />
                  <div>
                    <img
                      className='main-img'
                      src={banner}
                      alt='img'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
