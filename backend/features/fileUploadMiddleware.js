const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the directory where files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original filename
  }
});

// Define fileFilter function directly within the same file
const fileFilter = (req, file, cb) => {
  // Allow only PDF files
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024 // Set maximum file size (100MB in this example)
  },
  fileFilter: fileFilter // Use the fileFilter function
});

module.exports = { upload, storage, multer, fileFilter }; // Export fileFilter along with other configurations
