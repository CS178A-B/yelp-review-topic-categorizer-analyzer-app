import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    business_id: String,
    user_id: String,
    stars: String,
    text: String,
    date: String,
    ambience: String,
    service: String,
    food: String
});

const Review = mongoose.model('Review', reviewSchema, 'newyork_reviews');

export default Review;