import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    business_id: String,
    user_id: String,
    stars: Decimal128,
    text: String,
    date: String,
    ambience: Decimal128,
    service: Decimal128,
    food: Decimal128
});

const Review = mongoose.model('Review', postSchema);

export default Review;