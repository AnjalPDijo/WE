import { useState } from 'react';
import './loanDetails.css';
import Featured from '../Components/featured/Featured';
import axios from 'axios';
import { toast } from 'react-toastify';

function Loan() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    panchayatOrmunicipality: '',
    address: '',
    birthCertificate: null,
    aadhaarCard: null,
    passportPhoto: null,
    bankStatement: null,
  });

  const handleChange = (e) => {
    const { name, type } = e.target;
    const updatedValue = type === 'file' ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };


  function FileUploadForm() {
  const birthCertificateRef = useRef();
  const aadhaarCardRef = useRef();
  const passportPhotoRef = useRef();
  const bankStatementRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('birthCertificate', birthCertificateRef.current.files[0]);
    formData.append('aadhaarCard', aadhaarCardRef.current.files[0]);
    formData.append('passportPhoto', passportPhotoRef.current.files[0]);
    formData.append('bankStatement', bankStatementRef.current.files[0]);

    try {
      const response = await axios.post('/upload', formData);
      console.log(response.data); // Handle success response
      // Optionally, show a success message or navigate the user
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  const handleReset = () => {
    birthCertificateRef.current.value = null;
    aadhaarCardRef.current.value = null;
    passportPhotoRef.current.value = null;
    bankStatementRef.current.value = null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={birthCertificateRef} name="birthCertificate" />
      <input type="file" ref={aadhaarCardRef} name="aadhaarCard" />
      <input type="file" ref={passportPhotoRef} name="passportPhoto" />
      <input type="file" ref={bankStatementRef} name="bankStatement" />
      <button type="submit">Upload</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post('/api/upload', formDataToSend);

      if (response.status === 201) {
        // Reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          panchayatOrmunicipality: '',
          address: '',
          birthCertificate: null,
          aadhaarCard: null,
          passportPhoto: null,
          bankStatement: null,
        });
        // Show success toast
        toast.success("Loan Details collected successfully!");
      } else {
        // Show error toast
        toast.error("Failed to store details. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      // Show error toast
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
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
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
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
          <label>Upload Aadhaar Card:</label>
          <input
            type="file"
            name="aadhaarCard"
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
            name="bankStatement"
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button className="bn1" type="submit" style={{ marginLeft: '200px' }}>Submit Application</button>
      </form>
      <br />
      <Featured />
    </div>
  );
}

export default Loan;
