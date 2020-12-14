const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  business_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  ambience: {
    type: Number
  },
  service: {
    type: Number
  },
  health: {
    type: Number
  },
  food: {
    type: Number
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);