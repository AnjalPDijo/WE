const express = require('express');
const router = express.Router();
const AdminModel = require('../models/admin');
const UserModel = require('../models/user');
const LoanDetailsModel = require('../models/loandetail');
const ContactModel = require('../models/contact');
const { sendWelcomeEmail } = require('../features/emailService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { upload } = require('../features/fileUploadMiddleware');

const test = (req, res) => {
  res.json('test is working');
};

const signupuser = async (req, res) => {
    try {
      const { name, email, password, repeatPassword, wardNo, panchayatOrMunicipality, role } = req.body;
  
      if (!name || !email || !password || !repeatPassword || !wardNo || !panchayatOrMunicipality || !role) {
          return res.status(400).json({ error: 'Please fill in all fields' });
      }
  
      if (password !== repeatPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      if (password.length < 6) {
          return res.status(400).json({ error: 'Password should be at least 6 characters long' });
      }
  
      const Model = role === 'admin' ? AdminModel : UserModel;
      const exist = await Model.findOne({ email });
      if (exist) {
          return res.status(400).json({ error: 'Email is already taken' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new Model({
          name,
          email,
          password: hashedPassword,
          wardNo,
          panchayatOrMunicipality
      });
  
      await newUser.save();
  
      // Removed sending welcome email for brevity
  
      return res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    const user = await UserModel.findOne({ email });
    const admin = await AdminModel.findOne({ email });

    if (!user && !admin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const model = user || admin;
    const isPasswordMatch = await bcrypt.compare(password, model.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: model._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const role = user ? 'user' : 'admin';

    return res.status(200).json({ token, role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addLoanDetails = async (req, res) => {
  try {
    upload.fields([
      { name: 'birthCertificate', maxCount: 1 },
      { name: 'passportPhoto', maxCount: 1 },
      { name: 'bankStatementPhoto', maxCount: 1 },
      { name: 'aadhaarCard', maxCount: 1 }
    ])(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const { name, email, address, phoneNumber, panchayat, municipality } = req.body;
      const { birthCertificate, passportPhoto, bankStatementPhoto, aadhaarCard } = req.files;

      const loanDetails = new LoanDetailsModel({
        name,
        email,
        address,
        phoneNumber,
        panchayat,
        municipality,
        birthCertificate: birthCertificate[0].path,
        passportPhoto: passportPhoto[0].path,
        bankStatementPhoto: bankStatementPhoto[0].path,
        aadhaarCard: aadhaarCard[0].path
      });

      await loanDetails.save();

      return res.status(201).json({ message: 'Loan details added successfully' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const storeContactDetails = async (req, res) => {
  try {
    const { name, email, subject, description } = req.body;

    if (!name || !email || !subject || !description) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newContact = new ContactModel({ name, email, subject, description });
    await newContact.save();

    res.status(201).json({ message: 'Contact details collected successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contact data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getLoanDetails = async (req, res) => {
  try {
    const loanDetails = await LoanDetailsModel.find();
    res.json(loanDetails);
  } catch (error) {
    console.error('Error fetching loan details data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { test, signupuser, loginUser, addLoanDetails, storeContactDetails, getUsers, getLoanDetails, getContacts };
