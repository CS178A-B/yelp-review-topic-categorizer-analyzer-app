const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  review_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  business_id: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  useful: {
    type: Number
  },
  funny: {
    type: Number
  },
  cool: {
    type: Number
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);