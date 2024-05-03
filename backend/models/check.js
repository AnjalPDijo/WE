const mongoose = require('mongoose');

// Define the schema for CheckModel
const checkSchema = new mongoose.Schema({
  District:{
    type:String,
    required:true
  },
  Kudumbasree_Unit_No:{
    type:String,
    required: true
  },
  Kudumbasree_Unit_Name:{
    type:String,  
    required: true
  }
});

// Export the schema, not the model
const CheckModel =  mongoose.model('Check', checkSchema);
module.exports = CheckModel;
