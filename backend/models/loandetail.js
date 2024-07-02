// loandetail.js

const mongoose = require('mongoose');

const loanDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
      type: String,
      required: true
    },
    panchayatOrmunicipality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthCertificate: {
        type: String,
        required: true
    },
    aadhaarCard: {
        type: String,
        required: true // Make sure this field is marked as required if necessary
    },
    passportPhoto:{
      type: String,
      required: true
    },
    bankStatement:{
      type: String,
      required: true
    }
});

const LoanDetailsModel = mongoose.model('LoanDetails', loanDetailSchema);

module.exports = LoanDetailsModel;
