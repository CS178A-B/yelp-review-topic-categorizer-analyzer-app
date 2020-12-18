const express = require('express');
const router = express.Router();

// Load Review model
const Review = require('../../models/Review');
// const ohiorestaurants = require('../../models/ohiorestaurants');

// @route GET api/reviews/test
// @description tests reviews route
// @access Public
router.get('/test', (req, res) => res.send('review route testing!'));

// @route GET api/reviews
// @description Get all reviews
// @access Public
router.get('/', (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: 'No Reviews found' }));
});

// const { ObjectId, Mixed } = require('mongoose');
// const mongoose = require('mongoose');

// const ohiorestaurantsSchema = new mongoose.Schema({
//   _id: {
//     type: ObjectId
//   },
//   business_id: {
//     type: String
//   },
//   name: {
//     type: String
//   },
//   address: {
//     type: String
//   },
//   city: {
//     type: String
//   },
//   state: {
//     type: String
//   },
//   postal_code: {
//     type: String
//   },
//   latitude: {
//     type: Number
//   },
//   longitude: {
//     type: Number
//   },
//   stars: {
//     type: Mixed
//   },
//   categories: {
//     type: String
//   }
// });
// var collectionName = "ohiorestaurants";
// const Ohiorestaurant = mongoose.model("ohiorestaurant", ohiorestaurantsSchema, collectionName);

// Ohiorestaurant.find(function(err, ohiorestaurant) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(ohiorestaurant.length);
//     ohiorestaurant.forEach(element => console.log(element.name));
//   }
// });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// const filter = {};

// MongoClient.connect(
//   'mongodb+srv://tcUser:teamcool@sandbox.e0ybu.mongodb.net/test?authSource=admin&replicaSet=atlas-3mcch9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(connectErr, client) {
//     assert.equal(null, connectErr);
//     const coll = client.db('yelpdata').collection('ohiorestaurants');
//     coll.find(filter, (cmdErr, result) => {
//       assert.equal(null, cmdErr);
//       console.log(result.length);
//       result.forEach(element => console.log(element.name));
//     });
//     // client.close();
//   });

router.get('/:data', (req, res) => {
  // Business.find({
  //   "categories": {"$regex": req.body, "$options": "i"}
  // }, function(err, foundItems){
  //   res.render("ShowLanding", {listOfRestaurants: foundItems});
  // }).then(restaurant => res.json(restaurant))
  // .catch(err => res.status(404).json({ noreviewfound: 'No Review found' }));
  console.log(req.params.data);
  // Ohiorestaurant.find(function(err, restaurants) {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(restaurants.length);
  //     restaurants.forEach(element => console.log(element.name));
  //   }
  // });
  var queryString = '.' + req.params.data + '.';
  const filter = {
    'categories': {
      '$regex': queryString
    }
  };
  MongoClient.connect(
    'mongodb+srv://tcUser:teamcool@sandbox.e0ybu.mongodb.net/test?authSource=admin&replicaSet=atlas-3mcch9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(connectErr, client) {
      assert.equal(null, connectErr);
      const coll = client.db('yelpdata').collection('ohiorestaurants');
      coll.find(filter, (cmdErr, result) => {
        assert.equal(null, cmdErr);
        console.log(result.length);
        result.forEach(element => console.log(element.name));
        result => res.json(result);
      });
      // client.close();
    });
});

// @route GET api/reviews/:_id
// @description Get single review by _id
// @access Public
// router.get('/:_id', (req, res) => {
//   Review.findById(req.params._id)
//     .then(review => res.json(review))
//     .catch(err => res.status(404).json({ noreviewfound: 'No Review found' }));
// });

// @route GET api/reviews
// @description add/save review
// @access Public
router.post('/', (req, res) => {
  Review.create(req.body)
    .then(review => res.json({ msg: 'Review added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this review' }));
});

// @route GET api/reviews/:_id
// @description Update review
// @access Public
router.put('/:_id', (req, res) => {
  Review.findByIdAndUpdate(req.params._id, req.body)
    .then(review => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/reviews/:_id
// @description Delete review by _id
// @access Public
router.delete('/:_id', (req, res) => {
  Review.findByIdAndRemove(req.params._id, req.body)
    .then(review => res.json({ mgs: 'Review entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a review' }));
});

module.exports = router;