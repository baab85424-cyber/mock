const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    studentRegisterNumber: String,
    semester: String,
    examination: String,
    resultDate: String,
    class: String,
    mcNo: String,
    courses: [
        {
            slNo: Number,
            courseName: String,
            creditHrs: Number,
            gradePoints: Number,
            creditPoints: Number,
            remarks: String
        }
    ],
    summary: {
        sgpa: Number,
        cgpa: Number,
        totalCredits: Number,
        earnedCredits: Number
    }
});

module.exports = mongoose.model('Result', resultSchema);
