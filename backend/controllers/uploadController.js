const express = require('express');
const router = express.Router();
const LoanDetailsModel = require('../models/loandetail');
const AWS = require('aws-sdk');
require('dotenv').config();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
    region: process.env.REGION,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

router.post('/upload', upload.fields([
    { name: 'birthCertificate', maxCount: 1 },
    { name: 'aadhaarCard', maxCount: 1 },
    { name: 'passportPhoto', maxCount: 1 },
    { name: 'bankStatement', maxCount: 1 }
]), async (req, res) => {
    try {
        //Check if files exist in the request
        if ( !req.files['birthCertificate'] || !req.files['aadhaarCard'] || !req.files['passportPhoto'] || !req.files['bankStatement']) {
            return res.status(400).json({ error: true, message: 'All files must be uploaded' });
        }

        // Extract fields from request body
        const { name, email, phone, panchayatOrmunicipality, address } = req.body;

        // Check if user with the same email already exists
        const existingUser = await LoanDetailsModel.findOne({ email });
        if (existingUser) {
            // Inform client that email already exists
            return res.status(400).json({ message: "Email Id already exists. Please provide a different email address." });
        }

        // Retrieve uploaded files
        const birthCertificateFile = req.files['birthCertificate'][0];
        const aadhaarCardFile = req.files['aadhaarCard'][0];
        const passportPhotoFile = req.files['passportPhoto'][0];
        const bankStatementFile = req.files['bankStatement'][0];

        // Generate URLs and keys for files
        const birthCertificateFileURL = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${birthCertificateFile.originalname}`;
        const aadhaarCardFileURL = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${aadhaarCardFile.originalname}`;
        const passportPhotoFileURL = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${passportPhotoFile.originalname}`;
        const bankStatementFileURL = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${bankStatementFile.originalname}`;

        const aadhaarCardFileKey = `${uuidv4()}-${aadhaarCardFile.originalname}`;
        const passportPhotoFileKey = `${uuidv4()}-${passportPhotoFile.originalname}`;
        const birthCertificateFileKey = `${uuidv4()}-${birthCertificateFile.originalname}`;
        const bankStatementFileKey = `${uuidv4()}-${bankStatementFile.originalname}`;

        // Define parameters for uploading files to S3
        const birthCertificateParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: birthCertificateFileKey,
            Body: birthCertificateFile.buffer,
            ContentType: birthCertificateFile.mimetype
        };

        const aadhaarCardParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: aadhaarCardFileKey,
            Body: aadhaarCardFile.buffer,
            ContentType: aadhaarCardFile.mimetype
        };

        const passportPhotoParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: passportPhotoFileKey,
            Body: passportPhotoFile.buffer,
            ContentType: passportPhotoFile.mimetype
        };

        const bankStatementParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: bankStatementFileKey,
            Body: bankStatementFile.buffer,
            ContentType: bankStatementFile.mimetype
        };

        // Upload birth certificate file to S3
        s3.upload(birthCertificateParams, async (err1, data1) => {
            if (err1) {
                console.error('Error uploading birth certificate file to S3:', err1);
                return res.status(500).json({ error: true, message: 'Failed to upload birth certificate file to S3' });
            }

            // Upload Aadhar card file to S3
            s3.upload(aadhaarCardParams, async (err2, data2) => {
                if (err2) {
                    console.error('Error uploading Aadhaar card file to S3:', err2);
                    return res.status(500).json({ error: true, message: 'Failed to upload Aadhaar card file to S3' });
                }

                // Upload passport photo file to S3
                s3.upload(passportPhotoParams, async (err3, data3) => {
                    if (err3) {
                        console.error('Error uploading passport photo file to S3:', err3);
                        return res.status(500).json({ error: true, message: 'Failed to upload passport photo file to S3' });
                    }

                    // Upload bank statement file to S3
                    s3.upload(bankStatementParams, async (err4, data4) => {
                        if (err4) {
                            console.error('Error uploading bank statement file to S3:', err4);
                            return res.status(500).json({ error: true, message: 'Failed to upload bank statement file to S3' });
                        }

                        // Save file details to database
                        const user = new LoanDetailsModel({
                            name: name,
                            email: email,
                            panchayatOrmunicipality: panchayatOrmunicipality,
                            address: address,
                            phone: phone,
                            birthCertificate: birthCertificateFileURL,
                            aadhaarCard: aadhaarCardFileURL,
                            passportPhoto: passportPhotoFileURL,
                            bankStatement: bankStatementFileURL
                        });
                        await user.save();

                        // Send response indicating successful upload
                        res.status(201).json({ message: 'Upload successful', data: user });
                    });
                });
            });
        });
    } catch (error) {
        console.error('Error in file upload route:', error);
        // Send a generic error response
        res.status(500).json({ error: true, message: 'Internal server error' });
    }
});

module.exports = router;
