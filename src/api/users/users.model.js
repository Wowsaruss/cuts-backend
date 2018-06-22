const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    gender: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: { createdAt: 'created_at' } },
  { timestamps: { updatedAt: 'updated_at' } }
);
module.exports = mongoose.model('User', User);
