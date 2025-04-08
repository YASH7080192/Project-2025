const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  name: String,
  state: String,
  email: String,
  bio: String,
  resumeLink: String,
  mobile: String,
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobSchema);
