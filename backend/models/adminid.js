const mongoose = require('mongoose');

const adminIdSchema = new mongoose.Schema({
  adminid: {
    type: String,
    unique: true,
    required: true
  }
});

const AdminIdModel = mongoose.model('AdminId', adminIdSchema);
module.exports = AdminIdModel;


