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

import React from "react"
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
            {/* <Heading title='Our ' subtitle='Check out our company story and work process' /> */}
            <div className="abt">
            <p>Our Kudumbashree loan website serves as a dedicated platform for empowering women and marginalized communities by providing access to financial resources and opportunities.</p>
            <p> Through this platform, individuals can explore various loan schemes offered by Kudumbashree, a government-supported women's self-help group initiative in Kerala, India.</p>
            <p> Designed with simplicity and inclusivity in mind, our website offers easy navigation and comprehensive information about different loan programs, eligibility criteria, and application procedures.</p>
            <p> We aim to facilitate financial independence and socio-economic empowerment by bridging the gap between communities and accessible credit facilities, fostering growth and prosperity at the grassroots level.</p>
            <button className='btn2'>More About Us</button>
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