import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'style={{backgroundColor:'#28262627'}}>
        <div className='container'>
          <Heading title='Loan Providers' subtitle='Details Of Banks Providing Loan.' />
          <br></br>
          <p style={{Rightmargin:'-10px'}}>Click On The Bank Below To Apply For Loan</p>
          <br></br>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured