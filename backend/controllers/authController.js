const express = require('express');
const router = express.Router();
const multer = require('multer');
const AdminModel = require('../models/admin');
const UserModel = require('../models/user');
const AdminIdModel = require('../models/adminid');
const LoanDetailsModel = require('../models/loandetail');
const Login = require('../models/login');
const ContactModel = require('../models/contact');
const CheckModel = require('../models/check'); // Import the Check model
const { sendWelcomeEmail } = require('../features/emailService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { upload } = require('../features/fileUploadMiddleware');


//const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk');

/*AWS.config.update({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key'
});*/


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});



const test = (req, res) => {
  res.json('test is working');
};

const userSignup = async (req, res) => {
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
  

 // Import the AdminIdModel
 
 

 const checkUnit = async (req, res) => {
  const { district, unitNo, unitName } = req.body;

  try {
    const unit = await CheckModel.findOne({ 'District': district, 'Kudumbasree_Unit_No': unitNo, 'Kudumbasree_Unit_Name': unitName });

    if (unit) {
      return res.status(200).json({ exists: true, message: "Unit exists" });
    } else {
      return res.status(400).json({ exists: false, message: "Unit does not exist" });
    }
  } catch (error) {
    console.error('Error checking unit:', error);
    res.status(500).json({ error: 'An error occurred while checking the unit.' });
  }
};




 

 




 
 
 
 

 


 
/*
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Find user by email in the database
    const user = await UserModel.findOne({ email });

    // If user not found, return login failed
    if (!user) {
      return res.status(400).json({ error: 'Login failed. User does not exist' });
    }
    //const upassword = await UserModel.findOne({ password });
    // Compare provided password with stored hashed password
    console.log('Provided Password:', password);
    console.log('Stored Password:', user.password);


    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log('isPasswordMatch:', isPasswordMatch);

    if (isPasswordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token);
      res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(400).json({ error: 'Login failed. Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

*/


/*
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Find user by email in the database
    const user = await UserModel.findOne({ email });

    // If user not found, return login failed
    if (!user) {
      return res.status(400).json({ error: 'Login failed. User does not exist' });
    }

    // Compare provided password with stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      // Store login details in Login schema
      await Login.create({ email, loginTime: Date.now() });

      res.cookie('token', token);
      res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(400).json({ error: 'Login failed. Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

*/

/*
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Compare provided password with stored hashed password
    const user = await UserModel.findOne({ email });
    const isPasswordMatch = user ? await bcrypt.compare(password, user.password) : false;

    if (isPasswordMatch) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Store login details in Login schema
      await Login.create({ email, loginTime: Date.now() });

      res.cookie('token', token);
      return res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(400).json({ error: 'Login failed. Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Find user by email in the database
    const user = await UserModel.findOne({ email });

    // If user not found, return login failed
    if (!user) {
      return res.status(400).json({ error: 'Login failed. User does not exist' });
    }

    // Compare provided password with stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      // Store login details in Login schema
      // Use upsert operation to update existing document or insert new one
      await Login.updateOne(
        { email },
        { $set: { email, loginTime: Date.now() } },
        { upsert: true }
      );

      res.cookie('token', token);
      res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(400).json({ error: 'Login failed. Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};






 





 




/*
const addLoanDetails = async (req, res) => {
  try {
    console.log(req.files);
    const filesArray = Object.values(req.files);
    
    const { name, address, panchayatOrmunicipality, phoneNumber, email } = req.body;
    const [birthCertificate, passportPhoto, bankStatementPhoto, aadhaarCard] = filesArray;

    const fileData = { birthCertificate, passportPhoto, bankStatementPhoto, aadhaarCard };
    const uploadPromises = Object.values(fileData).map(async file => {
      console.log("Uploading file...");
      console.log(file);
      const fileKey = file.name;
      const uploadParams = {
        Bucket: 'weloan2',
        Key: fileKey,
        Body: file.buffer
      };
      try {
        const result = await s3.upload(uploadParams).promise();
        console.log(result.Location);
        return result.Location;
      } catch (uploadError) {
        console.error('Error uploading file:', uploadError);
        throw uploadError;
      }
    });

    const uploadResults = await Promise.allSettled(uploadPromises);
    const uploadSuccesses = uploadResults.filter(result => result.status === 'fulfilled').map(result => result.value);

    if (uploadSuccesses.length !== 4) {
      return res.status(500).json({ message: 'Failed to upload all files' });
    }

    const [birthCertificateUrl, passportPhotoUrl, bankStatementPhotoUrl, aadhaarCardUrl] = uploadSuccesses;

    const loanDetails = new LoanDetailsModel({
      name,
      address,
      panchayatOrmunicipality,
      phoneNumber,
      email,
      birthCertificate: birthCertificateUrl,
      passportPhoto: passportPhotoUrl,
      bankStatementPhoto: bankStatementPhotoUrl,
      aadhaarCard: aadhaarCardUrl
    });

    await loanDetails.save();

    res.status(201).json({ message: 'Loan details saved successfully' });
  } catch (error) {
    console.error('Error processing loan details:', error);
    res.status(500).json({ message: 'Failed to process loan details' });
  }
};

*/

const addLoanDetails = async (req, res) => {

    try {
      if (!req.files) {
        return res.status(400).json({ message: 'No files uploaded' });
      }
    console.log(req.files);
    const filesArray = Object.values(req.files);
    
    const { name, address, panchayatOrmunicipality, phoneNumber, email } = req.body;
    const [birthCertificate, passportPhoto, bankStatementPhoto, aadhaarCard] = filesArray;

    const fileData = { birthCertificate, passportPhoto, bankStatementPhoto, aadhaarCard };
    const uploadPromises = Object.values(fileData).map(async file => {
      console.log("Uploading file...");
      console.log(file);
      const fileKey = file.name;
      console.log('File key:', fileKey);
      const uploadParams = {
        Bucket: 'weloan2',
        Key: fileKey,
        Body: file.buffer
      };
      console.log('Upload params:', uploadParams); // Log upload parameters
      try {
        const result = await s3.upload(uploadParams).promise();
        console.log(result.Location);
        return result.Location;
      } catch (uploadError) {
        console.error('Error uploading file:', uploadError);
        throw uploadError;
      }
    });

    const uploadResults = await Promise.allSettled(uploadPromises);
    const uploadSuccesses = uploadResults.filter(result => result.status === 'fulfilled').map(result => result.value);

    if (uploadSuccesses.length !== 4) {
      return res.status(500).json({ message: 'Failed to upload all files' });
    }

    const [birthCertificateUrl, passportPhotoUrl, bankStatementPhotoUrl, aadhaarCardUrl] = uploadSuccesses;

    const loanDetails = new LoanDetailsModel({
      name,
      address,
      panchayatOrmunicipality,
      phoneNumber,
      email,
      birthCertificate: birthCertificateUrl,
      passportPhoto: passportPhotoUrl,
      bankStatementPhoto: bankStatementPhotoUrl,
      aadhaarCard: aadhaarCardUrl
    });

    await loanDetails.save();

    res.status(201).json({ message: 'Loan details saved successfully' });
  } catch (error) {
    console.error('Error processing loan details:', error);
    res.status(500).json({ message: 'Failed to process loan details' });
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


// adminController.js

//const AdminModel = require('../models/AdminModel');
//const UserModel = require('../models/UserModel');
//const ContactModel = require('../models/ContactModel');
//const LoanDetailsModel = require('../models/LoanDetailsModel');


const adminDashboard = async (req, res) => {
  const { adminid } = req.body;

  try {
    const admin = await AdminIdModel.findOne({ adminid });

    if (admin) {
      // Fetch data from user schema
      const users = await UserModel.find();

      // Fetch data from contact schema
      const contacts = await ContactModel.find();

      // Return data to frontend
      return res.status(200).json({ users, contacts });
    } else {
      return res.status(401).json({ error: 'Invalid Admin ID' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getUser = async (req, res) => {
  try {
    const userId=req.userData.userId
    console.log(userId)
    if(!userId){
      return res.status(200).json({message:'not authenticateed' });
    }
    const user = await UserModel.findOne({ _id:userId }).select('-password')
    console.log(user)
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(401).json({ error: 'Invalid user ID' });
    }
  }catch{
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const logoutUser = async (req, res) => {
  try {
      res.clearCookie('token');
      res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
      console.error('Logout failed:', error.message);
      res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { adminDashboard };



module.exports = { test, logoutUser,getUser,userSignup, loginUser, addLoanDetails, storeContactDetails,checkUnit , adminDashboard  };
