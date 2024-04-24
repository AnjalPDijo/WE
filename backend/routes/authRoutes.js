const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, signupuser, loginUser, addLoanDetails, storeContactDetails, getUsers, getContacts, getLoanDetails } = require('../controllers/authController');
const { sendWelcomeEmail } = require('../features/emailService');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get('/', test);
router.post('/signin', signupuser);
router.post('/signin', loginUser);
router.post('/loandetails', addLoanDetails);
router.post('/sendemail',sendWelcomeEmail);
router.post('/contact',storeContactDetails);
//admin dashboard
router.get('/users', getUsers);
router.get('/con-tacts', getContacts);
router.get('/loan-details', getLoanDetails);

module.exports = router;
