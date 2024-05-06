/*import React from "react"
import Back from "../common/Back"
//import Heading from "../"
import img from "../assets/images/home/abimg.jpg"
import "./About.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
          
            <div className="abt">
            <p>Our Kudumbashree loan website serves as a dedicated platform for empowering women and marginalized communities by providing access to financial resources and opportunities.</p>
            <p> Through this platform, individuals can explore various loan schemes offered by Kudumbashree, a government-supported women's self-help group initiative in Kerala, India.</p>
            <p> Designed with simplicity and inclusivity in mind, our website offers easy navigation and comprehensive information about different loan programs, eligibility criteria, and application procedures.</p>
            <p> We aim to facilitate financial independence and socio-economic empowerment by bridging the gap between communities and accessible credit facilities, fostering growth and prosperity at the grassroots level.</p>
            <button className='btn2'>More About Us</button>
            </div>
            
           </div> 
           
           
           <div className='right row'>
            <img src='images/location/abo.jpg' alt='' />
          </div> 
        </div>
       
      </section>
    </>
  )
}

export default About

*/


import React, { useState } from "react"
import Back from "../common/Back"
//import Heading from "../"
import img from "../assets/images/home/abimg.jpg"
import "./About.css"
const About = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleShowMoreContent = () => {
    setShowMoreContent(true);
  };
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            {/* <Heading title='Our ' subtitle='Check out our company story and work process' /> */}
            <div className="abt">
            <p>Our Kudumbashree loan website serves as a dedicated platform for empowering women and marginalized communities by providing access to financial resources and opportunities.<br></br>
            Through this platform, individuals can explore various loan schemes offered by Kudumbashree, a government-supported women's self-help group initiative in Kerala, India.<br></br>
            Designed with simplicity and inclusivity in mind, our website offers easy navigation and comprehensive information about different loan programs, eligibility criteria, and application procedures.<br></br>
            We aim to facilitate financial independence and socio-economic empowerment by bridging the gap between communities and accessible credit facilities, fostering growth and prosperity at the grassroots level.<br></br></p>
            <button className='btn2' onClick={handleShowMoreContent}>
            &gt;&gt;&gt;
              </button>
            {showMoreContent && (
                <>
            <p>Through our platform, individuals can explore a diverse range of loan schemes tailored to meet the specific needs of different groups within the community.<br></br>
            Whether it's supporting women's self-help groups, small businesses, or entrepreneurs from marginalized backgrounds, we aim to bridge the gap between financial institutions and those who need access to credit facilities.<br></br>
            Our website is meticulously designed with simplicity and inclusivity in mind. Users will find it easy to navigate through the various loan programs, understand the eligibility criteria, and access detailed information about the application procedures.<br></br>
            We prioritize transparency and clarity, ensuring that everyone can make informed decisions about their financial future.<br></br>
            By facilitating access to credit and financial services, we aspire to contribute significantly to the economic empowerment and social upliftment of individuals and communities.<br></br>
            Our mission is to foster growth, prosperity, and resilience at the grassroots level, ultimately creating a more inclusive and prosperous society for all.<br></br>
            The website showcases various loan schemes offered by Kudumbashree, which is a government-supported women's self-help group initiative in Kerala, India.<br></br>
            Emphasis is placed on providing a positive user experience, making it easy for users to find information, apply for loans, and navigate the platform effectively.</p>
                  {/* Add more paragraphs as needed */}
                </>
              )}
            
            </div>
            
           </div> 
           
           
           {/* <div className='right row'>
            <img src='../assets/images/home/abimg.jpg' alt='' />
          </div>  */}
        </div>
       
      </section>
    </>
  )
}

export default About