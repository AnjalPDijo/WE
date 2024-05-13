

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from './common/calculator/calculator';
import Grading from './pages/Grading';
import AdminDashboard from './pages/AdminDashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loan from './pages/testanj';
//import Test from './pages/testanj';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null); // Clear logged-in user data
    // Navigate to home page or perform any other logout actions
  };

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
      {/* <Navbar setUserName={setUserName} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin setLoggedInUser={setLoggedInUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/loandetails" element={<LoanApplicationForm/>} /> */}
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/grading" element={<Grading />} />
        <Route path="/dash" element={<AdminDashboard/>} />
        <Route path="/api/upload" element={<Loan/>}/>
      </Routes>
      <ToastContainer theme="dark" />
    </Router>
  );
}

export default App;
