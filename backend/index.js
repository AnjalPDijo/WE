/*const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not Connected',err))
const app = express();

//middleware
app.use(express.json())

app.use('/',require('./routes/authRoutes'))
app.use(cors())

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`)) 
*/
/*
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const { upload } = require('../backend/features/fileUploadMiddleware'); // Import upload middleware

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database not Connected', err));

const app = express();

// Middleware
app.use(express.json());

// Use multer middleware for handling file uploads
app.use(upload.any()); // Handle any type of multipart form data

app.use(cors());

// Routes
app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
*/

/*
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose directly
const { upload } = require('../backend/features/fileUploadMiddleware'); // Import upload middleware
const CheckModel = require('./models/check'); // Import the CheckModel

const app = express();

// Middleware
app.use(express.json());
app.use(upload.any()); // Handle any type of multipart form data
app.use(cors({ // Update with your frontend URL
  origin:'http://localhost:5173',
  credentials: true
}));

// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Database Connected');

    // Insert initial entries into the database
    try {
      const entries = [
        {
          "District": "Thiruvananthapuram",
          "Kudumbasree_Unit_No": "KU101",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 1"
        },
        {
          "District": "Kozhikode",
          "Kudumbasree_Unit_No": "KU102",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 2"
        },
        {
          "District": "Kannur",
          "Kudumbasree_Unit_No": "KU103",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 3"
        },
        {
          "District": "Ernakulam",
          "Kudumbasree_Unit_No": "KU104",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 4"
        },
        {
          "District": "Alappuzha",
          "Kudumbasree_Unit_No": "KU105",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 5"
        },
        {
          "District": "Pathanamthitta",
          "Kudumbasree_Unit_No": "KU106",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 6"
        },
        {
          "District": "Kottayam",
          "Kudumbasree_Unit_No": "KU107",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 7"
        },
        {
          "District": "Idukki",
          "Kudumbasree_Unit_No": "KU108",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 8"
        },
        {
          "District": "Malappuram",
          "Kudumbasree_Unit_No": "KU109",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 9"
        },
        {
          "District": "Palakkad",
          "Kudumbasree_Unit_No": "KU110",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 10"
        },
        {
          "District": "Thrissur",
          "Kudumbasree_Unit_No": "KU111",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 11"
        },
        {
          "District": "Wayanad",
          "Kudumbasree_Unit_No": "KU112",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 12"
        },
        {
          "District": "Kollam",
          "Kudumbasree_Unit_No": "KU113",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 13"
        },
        {
          "District": "Kasaragod",
          "Kudumbasree_Unit_No": "KU114",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 14"
        }
      ];
      
      
        // Add more entries here...
      

      // Insert each entry into the database
      await Promise.all(entries.map(entry => CheckModel.create(entry)));
      console.log('Initial entries added successfully');
    } catch (error) {
      console.error('Error inserting initial entries:', error);
    }
  })
  .catch((err) => {
    console.log('Database not Connected', err);
    process.exit(1); // Exit the process if unable to connect to the database
  });

// Routes
app.use('/', require('./routes/authRoutes'));

const port = process.env.PORT || 8000; // Use environment variable for port or default to 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));
*/

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const { upload } = require('../backend/features/fileUploadMiddleware');
const CheckModel = require('./models/check');
const AdminIdModel = require('./models/adminid');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(upload.any());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials: true
}));

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('Database Connected');

    // Insert initial entries into the database for Check schema
    try {
      const checkEntries = [
        {
          "District": "Thiruvananthapuram",
          "Kudumbasree_Unit_No": "KU101",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 1"
        },
        {
          "District": "Kozhikode",
          "Kudumbasree_Unit_No": "KU102",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 2"
        },
        {
          "District": "Kannur",
          "Kudumbasree_Unit_No": "KU103",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 3"
        },
        {
          "District": "Ernakulam",
          "Kudumbasree_Unit_No": "KU104",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 4"
        },
        {
          "District": "Alappuzha",
          "Kudumbasree_Unit_No": "KU105",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 5"
        },
        {
          "District": "Pathanamthitta",
          "Kudumbasree_Unit_No": "KU106",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 6"
        },
        {
          "District": "Kottayam",
          "Kudumbasree_Unit_No": "KU107",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 7"
        },
        {
          "District": "Idukki",
          "Kudumbasree_Unit_No": "KU108",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 8"
        },
        {
          "District": "Malappuram",
          "Kudumbasree_Unit_No": "KU109",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 9"
        },
        {
          "District": "Palakkad",
          "Kudumbasree_Unit_No": "KU110",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 10"
        },
        {
          "District": "Thrissur",
          "Kudumbasree_Unit_No": "KU111",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 11"
        },
        {
          "District": "Wayanad",
          "Kudumbasree_Unit_No": "KU112",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 12"
        },
        {
          "District": "Kollam",
          "Kudumbasree_Unit_No": "KU113",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 13"
        },
        {
          "District": "Kasaragod",
          "Kudumbasree_Unit_No": "KU114",
          "Kudumbasree_Unit_Name": "Kudumbasree Unit 14"
        }
        // Add more entries here...
      ];
      
      // Insert each entry into the database for Check schema
      await Promise.all(checkEntries.map(entry => CheckModel.create(entry)));
      console.log('Initial entries added successfully for Check schema');
    } catch (error) {
      console.error('Error inserting initial entries into Check schema:', error);
    }

    // Insert initial entries into the database for AdminId schema
   // Insert initial entries into the database for AdminId schema
try {
  const adminIds = [
    {
      adminid: "AD1"
    },
    {
      adminid: "AD2"
    },
    {
      adminid: "AD3"
    },
    {
      adminid: "AD4"
    },
  ];

  // Check if admin IDs already exist in the database
  const existingAdminIds = await AdminIdModel.find({ adminid: { $in: adminIds.map(id => id.adminid) } });

  // Filter out admin IDs that don't exist in the database
  const newAdminIds = adminIds.filter(id => !existingAdminIds.some(existingId => existingId.adminid === id.adminid));

  // Insert only the new admin IDs into the database
  await Promise.all(newAdminIds.map(id => AdminIdModel.create(id)));
  console.log('Initial admin IDs added successfully for AdminId schema');
} 
catch (error) {
      console.error('Error inserting initial admin IDs:', error);
    }
  })
  .catch((err) => {
    console.log('Database not Connected', err);
    process.exit(1);
  });

// Routes
app.use('/', require('./routes/authRoutes'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
,
