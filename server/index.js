require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');
const Result = require('./models/Result');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // In production, you might want to specify your frontend URL here
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/student_portal';

console.log('Attempting to connect to MongoDB...');
// Log a masked version of the URI to check if it's being read correctly
if (process.env.MONGODB_URI) {
    const maskedUri = process.env.MONGODB_URI.replace(/:([^@]+)@/, ':****@');
    console.log(`Using MONGODB_URI: ${maskedUri}`);
} else {
    console.log('MONGODB_URI is not set in environment variables, using local fallback.');
}

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Successfully'))
    .catch(err => {
        console.error('❌ MongoDB connection error details:');
        console.error(err);
    });

// API Routes
app.get('/api/profile', async (req, res) => {
    try {
        const student = await Student.findOne();
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/results', async (req, res) => {
    try {
        const results = await Result.find();
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
