import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    business_id: String,
    user_id: String,
    stars: Number,
    text: String,
    date: Date,
    ambience: Number,
    service: Number,
    food: Number
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;