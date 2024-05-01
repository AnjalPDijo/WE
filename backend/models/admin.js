const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  wardNo: {
    type: Number,
    required: true
  },
  panchayatOrMunicipality: {
    type: String,
    required: true
  },
  adminid: {
    type: String,
    required: true
  }
});

const AdminModel = mongoose.model('Admin', adminSchema);
module.exports = AdminModel;
