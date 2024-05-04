


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

    // Check if email and password are filled
    if (!data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }
  
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
          
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid login details");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
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

/*
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import img from '../assets/images/home/abimg.jpg';
import './Signin.css';

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
        toast.success('Login successful'); // Display success toast
        navigate('/grading');
      }
      
    } catch (error) {
      toast.error('Invalid email or password'); // Display error toast
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
*/