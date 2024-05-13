


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import img from '../assets/images/home/abimg.jpg';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    wardNo: '',
    panchayatOrMunicipality: '',
    role: 'user', // Default role is set to 'user'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, repeatPassword, wardNo, panchayatOrMunicipality, role } = formData;

    // Check if all fields are filled
    if (!name || !email || !password || !repeatPassword || !wardNo || !panchayatOrMunicipality) {
      toast.error('Please fill all fields');
      return;
    }

    // Check if password length is less than 6
    if (password.length < 6) {
      toast.error('Password must contain at least 6 characters');
      return;
    }

    // Check if password and repeat password match
    if (password !== repeatPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/signup', {
        name,
        email,
        password,
        repeatPassword,
        wardNo,
        panchayatOrMunicipality,
        role,
      });

      if (response.status === 201) {
        toast.success('Registered Successfully! Welcome to our Website');
        navigate('/signin');
        
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('User already exists');
      } else {
        console.error(error);
        toast.error('Failed to register. Please try again.');
      }
    }
  };

  return (
    <>
   
      <section className='contact mb' style={{height: '180vh' }}>
        <Back title='Please Sign Up And Get Our Help' name='Sign Up' cover={img} />
        <br></br>
        <div className='container' style={{height: '100vh' }} >
          <form className='shadow' onSubmit={handleFormSubmit} style={{ marginTop: '40px',height: '100vh' }}>
            <h4 style={{ marginTop: '40px' }}>Please enter your details to sign up</h4> <br />
            <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />
            <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
            <input type='password' placeholder='Repeat Your Password' name='repeatPassword' value={formData.repeatPassword} onChange={handleInputChange} />
            <input type='text' placeholder='Ward Number' name='wardNo' value={formData.wardNo} onChange={handleInputChange} />
            <input type='text' placeholder='Panchayat/Municipality' name='panchayatOrMunicipality' value={formData.panchayatOrMunicipality} onChange={handleInputChange} />
            <button className="b1" type='submit' style={{ marginTop: '20px',marginBottom:'20px'}}>Submit Request</button>
        </form>
          
        </div>
      </section>
    </>
  );
};

export default Signup;
