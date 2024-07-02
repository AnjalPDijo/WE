import React, { useState } from 'react';
import Heading from '../common/Heading';
import './Home.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import img from "../assets/images/home/abimg.jpg"
import Back from "../common/Back"

const Home = () => {
  const [district, setDistrict] = useState('');
  const [unitNo, setUnitNo] = useState('');
  const [unitName, setUnitName] = useState('');
  // const [notification, setNotification] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/check', {
        district,
        unitNo,
        unitName
      });
      const data = response.data;
      if (data) {
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className='Home'>
      <div className="blur-overlay"></div>
      <div className="content">
        <div className='container'>
          <Heading title='WE-Loan' subtitle='KudumbaShree Loan Initiative' />

          <form className='flex' onSubmit={handleSubmit}>
            <div className='box'>
              <span>District</span>
              <input type='text' name='district' placeholder='Enter Location:' value={district} onChange={(e)=>setDistrict(e.target.value)} />
            </div>
            <div className='box'>
              <span>KudumbaSree Unit No</span>
              <input type='text' name='unitNo' placeholder='Enter valid no' value={unitNo} onChange={(e)=>setUnitNo(e.target.value)} />
            </div>
            <div className='box'>
              <span>KudumbaSree Unit Name</span>
              <input type='text' name='unitName' placeholder='Enter valid name' value={unitName} onChange={(e)=>setUnitName(e.target.value)} />
            </div>
            <br />
            <button className='btn5' id='bu' style={{ marginBottom: '25px' }} type="submit">
              Submit
            </button>
          </form>

          {/* Display the notification if it exists */}
          {/* {notification && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default Home;
