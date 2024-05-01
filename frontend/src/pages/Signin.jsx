/*
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import './Signin.css';
import img from '../assets/images/home/abimg.jpg';

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/signin', {
        email: data.email, 
        password: data.password
      });
      const responseData = response.data;
      if (responseData) {
        toast.success(response.data.message)
        navigate('/grading');
        }
        
    } 
    catch (error) {
      toast.error(error.response.data.message);
    }
  };




  return (
    <section className='contact mb'>
      <Back title='Please Login And Get Our Help' name='Sign In' cover={img} />
      <div className='container'>
        <form className='shadow' onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <h4>Please enter the login details</h4>
          <div>
            <input type='text' placeholder='Email' name='email' value={data.email} onChange={handleInputChange} />
            <input type='password' placeholder='Password' name='password' value={data.password} onChange={handleInputChange} />
          </div>
          
          <button className="b1" type='submit' style={{ marginBottom: '-1px', marginLeft: '400px' }}>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Signin;
*/
/*
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import './Signin.css';
import img from '../assets/images/home/abimg.jpg';

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/signin', {
        email: data.email, 
        password: data.password
      });
      const responseData = response.data;
      if (responseData) {
        toast.success(response.data.message)
        navigate('/grading');
      }
        
    } 
    catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className='contact mb'>
      <Back title='Please Login And Get Our Help' name='Sign In' cover={img} />
      <div className='container'>
        <form className='shadow' onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <h4>Please enter the login details</h4>
          <div>
            <input type='text' placeholder='Enter Email' name='email' value={data.email} onChange={handleInputChange} style={{ width: '100%' }}/>
            <input type='password' placeholder='Enter Password' name='password' value={data.password} onChange={handleInputChange}style={{ width: '100%' }} />
          </div>
          
          <button className="b1" type='submit' style={{ marginBottom: '-1px', marginLeft: '0' }}>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Signin;

*/

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import './Signin.css';
import img from '../assets/images/home/abimg.jpg';
import Navbar from '../Components/Navbar'; // Import the Navbar component

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/signin', {
        email: data.email, 
        password: data.password
      });
      const responseData = response.data;
      if (responseData) {
        toast.success(response.data.message)
        navigate('/grading');
  
        // Redirect to grading page after successful login
        //navigate('/grading');

        // Pass user email to Navbar component
        <Navbar userEmail={data.email} />;
      }
          
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className='contact mb'>
      <Back title='Please Login And Get Our Help' name='Sign In' cover={img} />
      <div className='container'>
        <form className='shadow' onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <h4>Please enter the login details</h4>
          <div>
            <input type='text' placeholder='Enter Email' name='email' value={data.email} onChange={handleInputChange}/>
            <input type='password' placeholder='Enter Password' name='password' value={data.password} onChange={handleInputChange} />
          </div>
          <button className="b1" type='submit' style={{ marginBottom: '-1px', marginLeft: '0' }}>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Signin;

