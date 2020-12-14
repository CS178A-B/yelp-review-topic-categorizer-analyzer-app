const express = require('express');
const router = express.Router();

// Load Review model
const Review = require('../../models/Review');

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

// @route GET api/reviews/:_id
// @description Get single review by _id
// @access Public
router.get('/:_id', (req, res) => {
  Review.findById(req.params._id)
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noreviewfound: 'No Review found' }));
});

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