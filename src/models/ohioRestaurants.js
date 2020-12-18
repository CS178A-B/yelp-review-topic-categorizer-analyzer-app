const { ObjectId, Mixed } = require('mongoose');
const mongoose = require('mongoose');

const ohiorestaurantsSchema = new mongoose.Schema({
  _id: {
    type: ObjectId
  },
  business_id: {
    type: String
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  postal_code: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  stars: {
    type: Mixed
  },
  categories: {
    type: String
  }
});

module.exports = ohiorestaurants = mongoose.model('ohiorestaurant', ohiorestaurantsSchema);