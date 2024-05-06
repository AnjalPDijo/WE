const express = require('express');
const router = express.Router();
const AdminModel = require('../models/admin');
const UserModel = require('../models/user');
const AdminIdModel = require('../models/adminid');
const LoanDetailsModel = require('../models/loandetail');
const Login = require('../models/login');
const ContactModel = require('../models/contact');
const CheckModel = require('../models/check');
//const cors = require('cors');
const {test,logoutUser,getUser, userSignup, loginUser, addLoanDetails, storeContactDetails,checkUnit, adminDashboard } = require('../controllers/authController');
const { sendWelcomeEmail } = require('../features/emailService');
const { upload } = require('../features/fileUploadMiddleware'); // Import Multer middleware
const checkAuth = require('../middleware/checkAuth')

{/*router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);*/}

router.get('/', test);
//router.get('/' );
router.post('/signup', userSignup);
//router.post('/admin/signup', adminSignup);
router.get('/user',checkAuth,getUser)
router.post('/signin', loginUser);
router.get('/logout',checkAuth,logoutUser)
//router.post('/signin', loginAdmin);
//router.post('/loandetails', addLoanDetails);
router.post('/sendemail',sendWelcomeEmail);
router.post('/contact',storeContactDetails);
router.post('/check', checkUnit);
router.post('/checkdash',adminDashboard );
//admin dashboard


router.post('/loandetails',addLoanDetails); // Apply Multer middleware



router.get('/username', async (req, res) => {
  const { email } = req.query;

  try {
    // Find the user by email in your database
    const user = await UserModel.findOne({ email });

    if (!user) {
      // If user not found, return an error
      return res.status(404).json({ error: 'User not found' });
    }

    // If user found, return their name
    res.json({ name: user.name });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






// Route to fetch user data
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch contact data
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to store login details
router.post('/login-details', async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      // If the user doesn't exist, return a message indicating so
      return res.status(404).json({ message: "User not found" });
    }
    // Save the login details
    await User.findOneAndUpdate({ email }, { $set: { loginTime: Date.now() } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});




module.exports = router;













