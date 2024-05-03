/*import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminid, setAdminId] = useState('');
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [loanDetailsData, setLoanDetailsData] = useState([]);
  const [error, setError] = useState('');

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  const handleAdminDashboardSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/checkdash', { adminid });
      const data = response.data;
      if (data.exists) {
        toast.success(data.message);
        setUserData(data.users);
        setContactData(data.contacts);
        setLoanDetailsData(data.loanDetails);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to fetch data. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleAdminDashboardSubmit}>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit">View Data</button>
      </form>

      {error && <p className="error">Error: {error}</p>}

      <h3>User Data</h3>
      <ul>
        {userData.length > 0 ? (
          userData.map((user) => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))
        ) : (
          <li>No entries</li>
        )}
      </ul>

      <h3>Contact Data</h3>
      <ul>
        {contactData.length > 0 ? (
          contactData.map((contact) => (
            <li key={contact._id}>{contact.name} - {contact.email}</li>
          ))
        ) : (
          <li>No entries</li>
        )}
      </ul>

      <h3>Loan Details Data</h3>
      <ul>
        {loanDetailsData.length > 0 ? (
          loanDetailsData.map((loanDetail) => (
            <li key={loanDetail._id}>{loanDetail.name} - {loanDetail.email}</li>
          ))
        ) : (
          <li>No entries</li>
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
*/

// AdminDashboard.jsx

/*import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminid, setAdminId] = useState('');
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [loanDetailsData, setLoanDetailsData] = useState([]);
  const [error, setError] = useState('');

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  const handleAdminDashboardSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/checkdash', { adminid });
      const data = response.data;
      if (data.exists) {
        toast.success(data.message);

        // Update state with fetched data
        setUserData(data.userData);
        setContactData(data.contactData);
        setLoanDetailsData(data.loanDetailsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleAdminDashboardSubmit}>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit">View Data</button>
      </form>

      {error && <p className="error">Error: {error}</p>}

      <h3>User Data</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Ward No</th>
            <th>Panchayat/Municipality</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.wardNo}</td>
              <td>{user.panchayatOrMunicipality}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Contact Data</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.subject}</td>
              <td>{contact.description}</td>
              <td>{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Loan Details Data</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Panchayat</th>
            <th>Municipality</th>
            <th>Birth Certificate</th>
            <th>Passport Photo</th>
            <th>Bank Statement Photo</th>
            <th>Aadhaar Card</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {loanDetailsData.map((loanDetail) => (
            <tr key={loanDetail._id}>
              <td>{loanDetail.name}</td>
              <td>{loanDetail.email}</td>
              <td>{loanDetail.address}</td>
              <td>{loanDetail.phoneNumber}</td>
              <td>{loanDetail.panchayat}</td>
              <td>{loanDetail.municipality}</td>
              <td>{loanDetail.birthCertificate}</td>
              <td>{loanDetail.passportPhoto}</td>
              <td>{loanDetail.bankStatementPhoto}</td>
              <td>{loanDetail.aadhaarCard}</td>
              <td>{new Date(loanDetail.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
*/


/*
  
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [adminid, setAdminId] = useState('');
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/checkdash', { adminid });
      const data = response.data;

      if (data.error) {
        toast.error(data.error);
      } else {
        setUserData(data.users);
        setContactData(data.contacts);
        toast.success('Admin ID is Valid');
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast.error('Failed to fetch admin data');
    }
  };

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit">View Data</button>
      </form>

      {userData.length > 0 && contactData.length > 0 && (
        <>
          <h3>User Data</h3>
          <table>
           
          </table>

          <h3>Contact Data</h3>
          <table>
            
          </table>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [contactData, setContactData] = useState([]);

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
      <div className="table-container">
      <h3 className="table-header">User Details</h3>
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
      <h3 className="table-header">Contact Queries</h3>
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
    </div>
  );
};

export default AdminDashboard;
*/

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit">View Data</button>
      </form>

      {validAdmin && userData.length > 0 && contactData.length > 0 && (
        <>
          <div className="table-container">
            <h3 className="table-header">User Details</h3>
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
            <h3 className="table-header">Contact Queries</h3>
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
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adminid">Enter Admin ID:</label>
        <input type="text" id="adminid" value={adminid} onChange={handleAdminIdChange} />
        <button type="submit">View Data</button>
      </form>

      {validAdmin && userData.length > 0 && contactData.length > 0 && (
        <>
          <div className="table-container">
            <h3 className="table-header">User Details</h3>
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
            <h3 className="table-header">Contact Queries</h3>
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
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
