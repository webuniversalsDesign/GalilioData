import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import Automotive from "./pages/Automotive";
import Banking_And_Financial from "./pages/Banking_And_Financial";
import Biotech_And_Pharmaceutical from "./pages/Biotech_And_Pharmaceutical";
import Construction_Industry from "./pages/Construction_Industry";
import Education from "./pages/Education";
import Hospitality from "./pages/Hospitality";
import Information_Technology from "./pages/Information_Technology";
import Logistic_and_Distribution from "./pages/Logistic_and_Distribution";
import Manufacturing from "./pages/Manufacturing";
import Retail from "./pages/Retail";
import Real_Estate from "./pages/Real_Estate";
import Telecommunication_Company from "./pages/Telecommunication_Company";
import Travel_and_Tourism from "./pages/Travel_and_Tourism";
import Utility_And_Energy from "./pages/Utility_And_Energy";
import Data_Cleaning from "./pages/Data_Cleaning";
import Data_Appending from "./pages/Data_Appending";
import Data_Segmentation from "./pages/Data_Segmentation";
import Data_Verification from "./pages/Data_Verification";
import Reverse_Appending from "./pages/Reverse_Appending";
import Social_Media_Marketing from "./pages/Social_Media_Marketing";
import Web_Design from "./pages/Web_Design";
import RDPSC from "./pages/RDPSC";
import GDRP_Complaint from "./pages/GDRP_Complaint";
import Footer_GDRP from "./components/Footer_GDRP";
import Email_Appending from "./pages/Email_Appending";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFive />} />
        <Route exact path='/about-us/' element={<About />} />
        <Route exact path='/contact-us' element={<Contact />} />
        <Route exact path='/automobile-automotive-email-list/' element={<Automotive />} />
        <Route exact path='/banking-and-financial-email-list/' element={<Banking_And_Financial />} />
        <Route exact path='/biotech-pharmaceutical-email-list/' element={<Biotech_And_Pharmaceutical />} />
        <Route exact path='/construction-industry-email-list/' element={<Construction_Industry />} />
        <Route exact path='/education-email-list/' element={<Education />} />
        <Route exact path='/hospitality-email-list/' element={<Hospitality />} />
        <Route exact path='/information-technology-email-list/' element={<Information_Technology />} />
        <Route exact path='/logistic-and-distribution-email-list/' element={<Logistic_and_Distribution />} />
        <Route exact path='/manufacturing-email-list/' element={<Manufacturing />} />
        <Route exact path='/retail-email-list/' element={<Retail />} />
        <Route exact path='/real-estate-email-list/' element={<Real_Estate />} />
        <Route exact path='/telecommunication-company-email-list/' element={<Telecommunication_Company />} />
        <Route exact path='/travel-and-tourism-email-list/' element={<Travel_and_Tourism />} />
        <Route exact path='/utility-energy-email-list/' element={<Utility_And_Energy />} />
        <Route exact path='/data-cleansing/' element={<Data_Cleaning />} />
        <Route exact path='/data-appending/' element={<Data_Appending />} />
        <Route exact path='/data-segmentation/' element={<Data_Segmentation />} />
        <Route exact path='/data-verification/' element={<Data_Verification />} />
        <Route exact path='/reverse-appending/' element={<Reverse_Appending />} />
        <Route exact path='/social-media-marketing/' element={<Social_Media_Marketing />} />
        <Route exact path='/web-design/' element={<Web_Design />} />
        <Route exact path='/RDPSC' element={<RDPSC />} />
        <Route exact path='/gdpr-compliant/' element={<GDRP_Complaint />} />
        <Route exact path='/Footer_GDRP' element={<Footer_GDRP />} />
        <Route exact path='/email-appending-services/' element={<Email_Appending />} />
        <Route exact path='/TermsCondition' element={<TermsCondition />} />
        <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        
        
        
      </Routes>
      <ScrollToTop  smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
