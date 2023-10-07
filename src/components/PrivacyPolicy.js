import React from 'react'
import NavBar from './NavBar'
import FooterFour from './FooterFour'
import Breadcrumb from './Breadcrumb'

const PrivacyPolicy = () => {
  return (
    <>
        <NavBar/>
      <Breadcrumb title={"Privacy & Policy"} 
// subcontent={"  Galileo Data provides the most accurate and latest Education Email list that consists of contact details of all the decision makers in the education industry. We provide a safe and undated mailing   list that will help in rolling out your direct marketing campaigns and generate quality leads."}
/>

<div className='container'>

<h5 className='pt-5'>Introduction</h5>
<p>At Galileo Data Inc, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services, including our data-driven approach to transform investments into sales and marketing opportunities. By using our services, you agree to the practices described in this Privacy Policy.</p>

<h5 className='pt-5'> Information We Collect</h5>
<p><b>Personal Information:</b> We may collect personal information, including but not limited to your name, email address, phone number, and company details when you interact with our services or communicate with us.</p>
<p><b>Usage Data: </b> We may collect information about your use of our services, such as the pages you visit, the actions you take, and the data you submit.</p>

<h5 className='pt-5'>How We Use Your Information</h5>
<p><b>To Provide Services</b>We use the information collected to deliver and improve our services, including our data-driven approach to transform investments into sales and marketing opportunities.</p>
<p><b>Communication:</b> We may use your contact information to respond to your inquiries, provide updates, and send important information related to our services.</p>
<p><b>Analytics:</b> We use data analytics to better understand user behavior and improve the performance and effectiveness of our services.</p>

<h5 className='pt-5'>Data Sharing and Disclosure</h5>
<p><b>Third-Party Service Providers</b> We may share your information with trusted third-party service providers who assist us in delivering our services. These providers are bound by confidentiality agreements and are only authorized to use your data for the purposes outlined in this Privacy Policy.</p>
<p><b> Legal Compliance:</b> We may disclose your information when required by law, to protect our rights or the safety of others, or to comply with a judicial proceeding, court order, or legal process.</p>

<h5 className='pt-5'>Data Security</h5>
<p> We implement security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>

<h5 className='pt-5'>Changes to this Privacy Policy</h5>
<p>We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated Privacy Policy will be posted on our website.</p>

<h5 className='pt-5'>Contact Us</h5>
<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
<ul>
    <li><a href='mailto:Email: info@galileodata.us'>Email: info@galileodata.us</a></li>
    <li><a href='tel:646-461-2757'>Phone: 646-461-2757</a></li>
</ul>
<p className='pb-5 mb-5'>By using our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
</div>


<FooterFour/>
    </>
  )
}

export default PrivacyPolicy
