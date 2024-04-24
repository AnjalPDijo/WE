/*import React from 'react';
import Heading from '../common/Heading';
import './Home.css';

const Home = () => {
  return (
    <section className='Home'>
      <div className='container'>
        <Heading title='WE-Loan' subtitle='KudumbaSree Loan Initiative' />

        <form className='flex'>
          <div className='box'>
            <span>District</span>
            <input type='text' placeholder='Enter Location:' />
          </div>
          <div className='box'>
            <span>KudumbaSree Unit No</span>
            <input type='text' placeholder='Enter valid no' />
          </div>
          <div className='box'>
            <span>KudumbaSree Unit Name</span>
            <input type='text' placeholder='Enter valid name' />
          </div>
          <br />
          <button className='btn5' id='bu'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Home;
*/

import React from 'react';
import Heading from '../common/Heading';
import './Home.css';

const Home = () => {
  return (
    <section className='Home'>
       <div class="blur-overlay"></div>
       <div class="content">
      <div className='container'>
        <Heading title='WE-Loan' subtitle='KudumbaSree Loan Initiative' />

        <form className='flex'>
          <div className='box'>
            <span>District</span>
            <input type='text' placeholder='Enter Location:' />
          </div>
          <div className='box'>
            <span>KudumbaSree Unit No</span>
            <input type='text' placeholder='Enter valid no' />
          </div>
          <div className='box'>
            <span>KudumbaSree Unit Name</span>
            <input type='text' placeholder='Enter valid name' />
          </div>
          <br></br>
          <button className='btn4' id='bu'style={{marginTop: '10px'}}>
            Submit
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}

export default Home;