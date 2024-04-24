// loandetail.js

const mongoose = require('mongoose');

// Define LoanDetails schema
const LoanDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  panchayat: {
    type: String,
    required: true
  },
  municipality: {
    type: String,
    required: true
  },
  birthCertificate: {
    type: String,
    required: true
  },
  passportPhoto: {
    type: String,
    required: true
  },
  bankStatementPhoto: {
    type: String,
    required: true
  },
  aadhaarCard: {
    type: String,
    required: true
  }
});

// Create and export LoanDetails model

const LoanDetailsModel = mongoose.model('LoanApplicationForm', LoanDetailsSchema);
module.exports = LoanDetailsModel;