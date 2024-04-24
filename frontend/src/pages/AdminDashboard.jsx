import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [loanDetailsData, setLoanDetailsData] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get('/api/users')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    // Fetch contact data
    axios.get('/api/contacts')
      .then(response => {
        setContactData(response.data);
      })
      .catch(error => {
        console.error('Error fetching contact data:', error);
      });

    // Fetch loan details data
    axios.get('/api/loan-details')
      .then(response => {
        setLoanDetailsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching loan details data:', error);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="data-section">
        <h2>User Data</h2>
        <ul>
          {userData.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
      <div className="data-section">
        <h2>Contact Data</h2>
        <ul>
          {contactData.map(contact => (
            <li key={contact._id}>{contact.name} - {contact.email}</li>
          ))}
        </ul>
      </div>
      <div className="data-section">
        <h2>Loan Details Data</h2>
        <ul>
          {loanDetailsData.map(details => (
            <li key={details._id}>{details.name} - {details.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
