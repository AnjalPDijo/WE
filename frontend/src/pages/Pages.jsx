import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../common/header/header';
import Home from '../pages/Home';
import Footer from '../common/footer/footer';
import Signup from './Signup';
import Signin from './Signin';
import Services from '../services/services';
import About from './About'; 
import Contact from './Contact'; 
import LoanApplicationForm from './LoanDetails';
import Calculator from '../common/calculator/calculator';
import AdminDashboard from './AdminDashboard';


const Pages = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/contact" component={Contact} />
      {/* Add routes for LoanDetails and Calculator */}
      {/* Replace LoanDetails and Calculator with the actual components */}
      {/* Import the components if they are defined in separate files */}
      <Route path="/loandetails" component={LoanApplicationForm} /> 
      <Route path="/calculator" component={Calculator} />
      <Route path="/admin-dashboard" component={AdminDashboard} />

      <Footer />
    </>
  );
};

export default Pages;
