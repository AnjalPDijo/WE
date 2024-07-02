// import { useState } from 'react';
// import './loanDetails.css';
// import Featured from '../Components/featured/Featured';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function LoanApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     panchayatOrmunicipality: '',
//     address: '',
//     birthCertificate: null,
//     aadhaarCard: null,
//     passportPhoto: null,
//     bankStatement: null,
//   });


//   const handleChange = (e) => {
//     const { name, type, value, files } = e.target;
//     const updatedValue = type === 'file' ? files[0] : value;
    
//     setFormData({
//       ...formData,
//       [name]: updatedValue,
//     });
//   };
  
  
  

//     // Check if exactly four files are uploaded
//     const uploadedFiles = [formData.birthCertificate,formData.aadhaarCard, formData.passportPhoto, formData.bankStatement];
//     const numUploadedFiles = uploadedFiles.filter(file => file !== null).length;
    
//     if (numUploadedFiles !== 4) {
//       toast.error("Please upload exactly four files");
//       return;
//     }


//   // const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });
  
//       const response = await axios.post('/loandetails', formDataToSend);
//       if (response.status === 201) {
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           panchayatOrmunicipality: '',
//           address: '',
//           birthCertificate: null,
//           aadhaarCard: null,
//           passportPhoto: null,
//           bankStatement: null,
//         });
       
//         toast.success("Loan Details collected successfully!");
//       } else {
//         toast.error("Failed to store details. Please try again later.");
//       }
     
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred. Please try again later.");
//     }
//   };
  

//   return (
//     <>
//     <div className='center-content'>
//       <h2>Loan Application Form</h2>
//       <form onSubmit={handleSubmit} className='f1' style={{ marginTop: '30px' }}>
//         {console.log("working")}
//       <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           </div>
        
//         <div>
//           <label>Panchayat/Municipality:</label>
//           <input
//             type="text"
//             name="panchayatOrmunicipality"
//             value={formData.panchayatOrmunicipality}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
  
       

      
//         <div>
//           <label>Upload Birth Certificate:</label>
//           <input
//             type="file"
//             name="birthCertificate"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Upload Aadhaar Card:</label>
//           <input
//             type="file"
//             name="aadhaarCard"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Upload Passport Size Photo:</label>
//           <input
//             type="file"
//             name="passportPhoto"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Bank Statement Photo:</label>
//           <input
//             type="file"
//             name="bankStatement"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <br></br>
 
//         <button className="bn1" type="submit" style={{ marginLeft: '200px' }}>Submit Application</button>
//       </form>
//       <br></br>
//       <Featured />
//     </div>
//     </>
//   );
// }

// export default LoanApplicationForm;


// /*

// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function LoanApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     panchayatOrmunicipality: '',
//     phoneNumber: '',
//     email: '',
//     birthCertificate: null,
//     passportPhoto: null,
//     bankStatementPhoto: null,
//     aadhaarCard: null,
//   });

//   const handleChange = (e) => {
//     const { name, type, value, files } = e.target;
//     const updatedValue = type === 'file' ? files[0] : value;
    
//     setFormData({
//       ...formData,
//       [name]: updatedValue,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if exactly four files are uploaded
//     const uploadedFiles = [formData.birthCertificate, formData.passportPhoto, formData.bankStatementPhoto, formData.aadhaarCard];
//     const numUploadedFiles = uploadedFiles.filter(file => file !== null).length;
    
//     if (numUploadedFiles !== 4) {
//       toast.error("Please upload exactly four files");
//       return;
//     }

//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });
  
//       const response = await axios.post('/loandetails', formDataToSend);
//       if (response.status === 201) {
//         setFormData({
//           name: '',
//           address: '',
//           panchayatOrmunicipality: '',
//           phoneNumber: '',
//           email: '',
//           birthCertificate: null,
//           passportPhoto: null,
//           bankStatementPhoto: null,
//           aadhaarCard: null
//         });
//         toast.success("Loan Details collected successfully!");
//       } else {
//         toast.error("Failed to store details. Please try again later.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className='center-content'>
//       <h2>Loan Application Form</h2>
//       <form onSubmit={handleSubmit} className='f1' style={{ marginTop: '30px' }}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Panchayat/Municipality:</label>
//           <input
//             type="text"
//             name="panchayatOrmunicipality"
//             value={formData.panchayatOrmunicipality}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Birth Certificate:</label>
//           <input
//             type="file"
//             name="birthCertificate"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Passport Size Photo:</label>
//           <input
//             type="file"
//             name="passportPhoto"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Bank Statement Photo:</label>
//           <input
//             type="file"
//             name="bankStatementPhoto"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Aadhaar Card:</label>
//           <input
//             type="file"
//             name="aadhaarCard"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <br />
//         <button className="bn1" type="submit" style={{ marginLeft: '200px' }}>Submit Application</button>
//       </form>
//     </div>
//   );
// }

// export default LoanApplicationForm;
// */


