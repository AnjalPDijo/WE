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
import Loan from '../pages/testanj';
import Calculator from '../common/calculator/calculator';
import AdminDashboard from './AdminDashboard';
import Grading from './Grading';


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
      <Route path="/api/upload" component={Loan} /> 
      <Route path="/calculator" component={Calculator} />
      <Route path="/dash" component={AdminDashboard} />
      <Route path="/grading" component={Grading} />

      <Footer />
    </>
  );
};

export default Pages;
