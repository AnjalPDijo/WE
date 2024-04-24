import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import img from '../assets/images/home/abimg.jpg';
import './Register.css';

const Register = () => {
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
    try {
      const { name, email, password, repeatPassword, wardNo, panchayatOrMunicipality, role } = formData;
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
      console.error(error);
      toast.error('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back title='Please Sign Up And Get Our Help' name='Sign Up' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleFormSubmit} style={{ marginTop: '10px' }}>
            <h4>Please enter your details to sign up</h4> <br />
            <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />
            <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
            <input type='password' placeholder='Repeat Your Password' name='repeatPassword' value={formData.repeatPassword} onChange={handleInputChange} />
            <input type='text' placeholder='Ward Number' name='wardNo' value={formData.wardNo} onChange={handleInputChange} />
            <input type='text' placeholder='Panchayat/Municipality' name='panchayatOrMunicipality' value={formData.panchayatOrMunicipality} onChange={handleInputChange} />
            <button className="b1" type='submit'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
