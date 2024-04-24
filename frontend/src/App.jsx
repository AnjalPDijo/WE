import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/pages/Home';
import SignUp from './pages/Register';
import SignIn from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculator from './common/calculator/calculator';
import LoanApplicationForm from './pages/LoanDetails';

import AdminDashboard from './pages/AdminDashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loandetails" element={<LoanApplicationForm />} />
        <Route path="/calculator" element={<Calculator />} />

        <Route path="/admin-dashboard" component={AdminDashboard} />

      </Routes>
      <ToastContainer theme="dark" />
     
    </Router>
  );
}

export default App;