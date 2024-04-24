import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
          <img src={img} alt="Logo" style={{ width: '100px', height: 'auto', marginRight: '10px', marginTop: '5px', position: 'relative', top: 0, left: 0 }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loandetails">Loan Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;