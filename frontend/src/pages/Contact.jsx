import React, { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import img from "../assets/images/home/abimg.jpg"
import Back from "../common/Back"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, subject, description } = formData; // Access data from formData
      const response = await axios.post('/contact', {
        name,
        email,
        subject,
        description,
      });
      if (response.status === 201) { // Check if response status is 201
        setFormData({ name: '', email: '', subject: '', description: '' });
        toast.success("Your message has been sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' style={{ marginTop: '10px' }} onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />
              <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
            </div>
            <input type='text' placeholder='Subject' name='subject' value={formData.subject} onChange={handleInputChange} />
            <input type='text' placeholder='Description' name='description' value={formData.description} onChange={handleInputChange} />
            <button className="b1" type='submit' style={{ marginBottom: '-1px', marginLeft: '400px' }}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
