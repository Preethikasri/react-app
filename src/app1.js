
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');

// Replace 'your_mongodb_uri' with your actual MongoDB URI

const mongodbUri = 'mongodb://preethikasri009:q2HCrzfaMOrwK0CX@cluster0.cgtqmcp.mongodb.net:5000/icci.myicci';
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.array('Files'), (req, res) => {
  // Save file details to MongoDB
  // 'req.files' contains an array of uploaded files with their details
  console.log(req.files);

  // Do further processing or save the file details to MongoDB as needed

  res.json({ message: 'File(s) uploaded successfully' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
