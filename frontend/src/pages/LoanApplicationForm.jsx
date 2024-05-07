import { useState } from 'react';
import './Loandetails.css';
import Featured from '../Components/featured/Featured';
import axios from 'axios';
import { toast } from 'react-toastify';

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    panchayatOrmunicipality: '',
    phoneNumber: '',
    email: '',
    birthCertificate: null,
    passportPhoto: null,
    bankStatementPhoto: null,
    aadhaarCard: null,
  });


  /*const handleChange = (e) => {
    const { name, type } = e.target;
    const updatedValue = type === 'file' ? e.target.files[0] : e.target.value;
    
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };*/


  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const updatedValue = type === 'file' ? files[0] : value;
    
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  
  
  
<<<<<<< HEAD
=======
    // Check if exactly four files are uploaded
    const uploadedFiles = [formData.birthCertificate, formData.passportPhoto, formData.bankStatementPhoto, formData.aadhaarCard];
    const numUploadedFiles = uploadedFiles.filter(file => file !== null).length;
    
    if (numUploadedFiles !== 4) {
      toast.error("Please upload exactly four files");
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
  
      const response = await axios.post('/loandetails', formDataToSend);
      if (response.status === 201) {
        // Clear form fields after successful submission
        setFormData({
          name: '',
          address: '',
          panchayat: '',
          phoneNumber: '',
          municipality: '',
          email: '',
          birthCertificate: null,
          passportPhoto: null,
          bankStatementPhoto: null,
          aadhaarCard: null
        });
        toast.success("Loan Details collected successfully!");
      } else {
        toast.error("Failed to store details. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  */
  // const [submitted, setSubmitted] = useState(false);
>>>>>>> 09001d47070c09f0b7e36a10b398853dc79d2b8b
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
  
      const response = await axios.post('/loandetails', formDataToSend);
      if (response.status === 201) {
        setFormData({
          name: '',
          address: '',
          panchayatOrmunicipality: '',
          phoneNumber: '',
          email: '',
          birthCertificate: null,
          passportPhoto: null,
          bankStatementPhoto: null,
          aadhaarCard: null
        });
        // setSubmitted(true);
        toast.success("Loan Details collected successfully!");
      } else {
        toast.error("Failed to store details. Please try again later.");
      }
     /* if (!formData.panchayat && !formData.municipality) {
        toast.error("Please fill out either Panchayat or Municipality");
        return;
      }*/
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className='center-content'>
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit} className='f1' style={{ marginTop: '30px' }}>
      <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Panchayat/Municipality:</label>
          <input
            type="text"
            name="panchayatOrmunicipality"
            value={formData.panchayatOrmunicipality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Document Uploads */}
        <div>
          <label>Upload Birth Certificate:</label>
          <input
            type="file"
            name="birthCertificate"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Passport Size Photo:</label>
          <input
            type="file"
            name="passportPhoto"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Bank Statement Photo:</label>
          <input
            type="file"
            name="bankStatementPhoto"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Aadhaar Card:</label>
          <input
            type="file"
            name="aadhaarCard"
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
 
        <button className="bn1" type="submit" style={{ marginLeft: '200px' }}>Submit Application</button>
      </form>
      <br></br>
      <Featured />
      {/* {submitted && <Featured />} */}
    </div>
  );
}

export default LoanApplicationForm;
