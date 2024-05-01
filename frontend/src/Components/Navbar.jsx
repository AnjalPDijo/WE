/*import React, { useEffect, useState } from 'react';
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
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grading">Grading</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dash">Admin</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/
/*
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png'

const Navbar = ({ loggedInUser, onLogout }) => {
  const handleLogout = () => {
    // Call the logout function passed from App component
    onLogout();
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top${loggedInUser ? ' navbar-loggedin' : ''}`}>
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
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/dash">Admin</Link>
            </li>
            {loggedInUser && (
              <li className="nav-item">
                <span className="nav-link">Welcome, {loggedInUser.name}</span>
              </li>
            )}
            {loggedInUser && (
              <li className="nav-item">
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/
/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    // Clear userName from localStorage and reset state
    localStorage.removeItem('userName');
    setUserName('');
  };

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
              <Link className="nav-link" to="/about">About</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            
            {userName && (
              <li className="nav-item">
                <span className="nav-link">Welcome, {userName}</span>
              </li>
            )}

            
            {userName && (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/
/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png';

import axios from 'axios';

const Navbar = ({ userEmail }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      fetchUserName();
    }
  }, []);

  const fetchUserName = async () => {
    try {
      const response = await axios.get('/username', {
        params: {
          email: userEmail
        }
      });
      const { name } = response.data;
      setUserName(name);
      localStorage.setItem('userName', name);
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={img} alt="Logo" style={{ width: '100px', height: 'auto', marginRight: '10px', marginTop: '5px', position: 'relative', top: 0, left: 0 }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item" key="home">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" key="about">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            
            {userName && (
              <li className="nav-item" key="welcome">
                <span className="nav-link">Welcome, {userName}</span>
              </li>
            )}
            {userName && (
              <li className="nav-item" key="logout">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/
/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png';
import axios from 'axios';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState('');

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

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };

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
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {userName && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {userName}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/home/image.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Fetch user data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user');
        console.log(response);
        setUserName(response.data.user.name);
      } catch (error) {
        navigate('/signin')
        toast.error('Failed to fetch user data');
      }
    };
  
    fetchData();
  }, []);
  

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

  // useEffect(() => {
  //   const storedUserName = localStorage.getItem('userName');
  //   if (storedUserName) {
  //     setUserName(storedUserName);
  //   }
  // }, []);

  const handleLogout = async () => {
    try{
      const response = axios.get('/logout')
      toast.success('logout successfull')
      navigate('/')
      setUserName('')
    }catch(error){
      console.log(error)
      toast.error('something went wrong')
    }
   
  };

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
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dash">Admin</Link>
            </li>
            {userName && (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {userName}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
