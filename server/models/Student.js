const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  registerNumber: { type: String, unique: true },
  mobileNumber: String,
  emailId: String,
  fatherName: String,
  fatherMobile: String,
  college: String,
  motherName: String,
  programme: String,
  usn: String,
  school: String
});

module.exports = mongoose.model('Student', studentSchema);
