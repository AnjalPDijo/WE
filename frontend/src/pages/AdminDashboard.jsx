
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminid, setAdminId] = useState('');
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [validAdmin, setValidAdmin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/checkdash', { adminid });
      const data = response.data;

      if (data.error) {
        toast.error(data.error);
        setValidAdmin(false);
      } else {
        setUserData(data.users);
        setContactData(data.contacts);
        toast.success('Admin ID is Valid');
        setValidAdmin(true);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast.error('Failed to fetch admin data');
      setValidAdmin(false); // Update validAdmin state on error
    }
  };

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };


 // Function to handle edit button click
 const handleEdit = (id) => {
  // Implement logic to open edit modal or navigate to edit page
  console.log(`Editing user/contact with ID: ${id}`);
};

// Function to handle delete button click
const handleDelete = async (id, type) => {
  try {
    await axios.delete(`/api/${type}/${id}`);
    toast.success(`${type} deleted successfully`);
    // Refresh data after deletion
    fetchData();
  } catch (error) {
    console.error('Error deleting data:', error);
    toast.error('Failed to delete data');
  }
};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/users');
        setUserData(userResponse.data);
        
        const contactResponse = await axios.get('/contacts');
        setContactData(contactResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 style={{Topmargin:'100px'}}>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}class='f1'>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit" class="b"style={{ marginBottom: '8px',marginTop: '15px'}}>View Data</button>
      </form>

      {validAdmin && userData.length > 0 && contactData.length > 0 && (
        <>
       
        
          <div className="table-container">
            <h3 className="table-header">User <span>{' '}Details{' '}</span>Table</h3>
           
          
            <table className="data-table">
              <thead>
              <br></br><br></br><br></br>
                <tr>
                
                  <th>Name</th>
                  <th>Email</th>
                  <th>Ward No</th>
                  <th>Panchayat/Municipality</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.wardNo}</td>
                    <td>{user.panchayatOrMunicipality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h3 className="table-header" style={{Leftmargin:'10px'}}>Contact<span>{' '}Queries{' '}</span>Table</h3>
            <table className="data-table">
              <thead>
              <br></br><br></br><br></br>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminid, setAdminId] = useState('');
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [checkData, setCheckData] = useState([]); // State for check data
  const [validAdmin, setValidAdmin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/checkdash', { adminid });
      const data = response.data;

      if (data.error) {
        toast.error(data.error);
        setValidAdmin(false);
      } else {
        setUserData(data.users);
        setContactData(data.contacts);
        setCheckData(data.checks); // Update check data state
        toast.success('Admin ID is Valid');
        setValidAdmin(true);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast.error('Failed to fetch admin data');
      setValidAdmin(false); // Update validAdmin state on error
    }
  };

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/users');
        setUserData(userResponse.data);
        
        const contactResponse = await axios.get('/contacts');
        setContactData(contactResponse.data);

        // Fetch check data
        const checkResponse = await axios.get('/checks');
        setCheckData(checkResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 style={{ marginTop: '100px' }}>Admin Dashboard</h2>
      <form onSubmit={handleSubmit} class='f1'>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit" class="b" style={{ marginBottom: '8px', marginTop: '15px' }}>View Data</button>
      </form>

      {validAdmin && userData.length > 0 && contactData.length > 0 && checkData.length > 0 && (
        <>
          <div className="table-container">
            <h3 className="table-header">User Details Table</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Ward No</th>
                  <th>Panchayat/Municipality</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.wardNo}</td>
                    <td>{user.panchayatOrMunicipality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h3 className="table-header">Contact Queries Table</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h3 className="table-header">Check Schema Table</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>District</th>
                  <th>Kudumbasree_Unit_No</th>
                  <th>Kudumbasree_Unit_Name</th>
                </tr>
              </thead>
              <tbody>
                {checkData.map((check) => (
                  <tr key={check._id}>
                    <td>{check.District}</td>
                    <td>{check.Kudumbasree_Unit_No}</td>
                    <td>{check.Kudumbasree_Unit_Name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

