// emailService.js
/*const nodemailer = require('nodemailer');

// Create transporter with app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anjalpdijo01@gmail.com', // Your Gmail email address
    pass: 'foryou@01' // Your Gmail app password
  }
});

// Function to send welcome email
const sendWelcomeEmail = (email, name, role) => {
  let subject = '';
  let body = '';
  if (role === 'admin') {
    subject = 'Welcome to WeLOAN - Admin Registration';
    body = `Subject: ${subject}\n\nDear ${name},\n\nWelcome to WeLOAN as an admin!\nExplore admin functionalities and manage the WeLOAN platform.\n\nSincerely,\nThe WeLOAN Team`;
  } else {
    subject = 'Welcome to WeLOAN - User Registration';
    body = `Subject: ${subject}\n\nDear ${name},\n\nWelcome to WeLOAN, supporting Kudumbasree members with easy loan access!\nExplore loans, rates, and apply online at WeLOAN website.\n\nVisit our website for FAQs and a chat option to connect with our support team.\n\nSincerely,\nThe WeLOAN Team`;
  }

  const mailOptions = {
    from: 'anjalpdijo01@gmail.com',
    to: email,
    subject: subject,
    text: body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendWelcomeEmail };*/


const nodemailer = require('nodemailer');

// Create transporter with app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anjalpdijo01@gmail.com', // Your Gmail email address
    pass: process.env.EMAIL_APP_PASS // Your Gmail app password
  }
});





// Function to send welcome email for user registration
const sendWelcomeEmail = (email, name) => {
  const subject = 'Welcome to WELOAN - User Registration';
  const body = `Subject: ${subject}\n\nDear ${name},\n\nWelcome to the WELOAN Community!\n\nSincerely,\nThe WELOAN Team`;

  const mailOptions = {
    from: 'anjalpdijo01@gmail.com',
    to: email,
    subject: subject,
    text: body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendWelcomeEmail };

