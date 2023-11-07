import React, { useState, useEffect } from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import BannerFive from "../components/BannerFive";
import FooterFour from "../components/FooterFour";
import TeamAreaThree from "../components/TeamAreaThree";
import WorkProcessFour from "../components/WorkProcessFour";
import FaqAreaOne from "../components/FaqAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import NavBar from "../components/NavBar";
import Preloader from "../components/Preloader";

import { Helmet } from "react-helmet";


const HomeFive = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API fetch) for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>

      {/* Conditionally render the Preloader based on the isLoading state */}
      {isLoading ? (
        <Preloader />
      ) : (

       

        <div>
        <Helmet>
  
  <title>Galileodata.us – Galileo Data provides global business organizations with the fuel — ‘DATA’ to power their multi-channel marketing campaigns.</title>
  <meta name="description" content="At Galileodata.us, discover high-quality leads at market rates in the right amount. Elevate your marketing strategies with precision and success."/>
  {/* <meta name="keywords" content="Home"/> */}
  <link rel="canonical" href="https://galileodata.us/" />

</Helmet>

          {/* Navigation Bar */}
          <NavBar />

          {/* Banner Five */}
          <BannerFive />

          {/* About Area Five */}
          <AboutAreaFive />

          {/* Work Process Four */}
          <WorkProcessFour />

          {/* FAQ Area One */}
          <FaqAreaOne />

          {/* Team Area Three */}
          <TeamAreaThree />

          {/* Work Process One */}
          <WorkProcessOne />

          {/* Footer Four */}
          <FooterFour />
        </div>
      )}
    </>
  );
};

export default HomeFive;
