const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    //unique: true
  },
  loginTime: {
    type: Date,
    default: null
  },
  submissionStatus: {
    type: String,
    enum: ['pending','submitted'],
    default: 'pending'
  }
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
