/*const bcrypt = require('bcrypt')

const hashPassword =(password) => {
    return new Promise((resolve,reject) => {
        bcrypt.genSalt(12,(err,salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err,hash) => {
                if (err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password,hashed)
}

module.exports ={
    hashPassword,
    comparePassword
}*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = '901684c86e10acbd7c5fe628075a1441413c6f5e4f96df59bc731f2fb8c53d2d'; // Replace with your actual secret key

// Function to generate JWT token
const generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
        // Add more user data to payload as needed
    };
    const options = {
        expiresIn: '1h', // Token expiration time (e.g., 1 hour)
    };
    return jwt.sign(payload, secretKey, options);
};

// Function to hash a password
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

// Function to compare a password with a hashed password
const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};

module.exports = {
    generateToken,
    hashPassword,
    comparePassword
};
