const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    repeatPassword: String,
    wardNo: {
        type: Number,
        required: true
    },
    panchayatOrMunicipality: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
