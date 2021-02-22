import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    business_id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: String,
    latitude: Decimal128,
    longitude: Decimal128,
    stars: Decimal128,
    categories: String,
    ambience: Decimal128,
    service: Decimal128,
    food: Decimal128
});

const Restaurant = mongoose.model('Restaurant', postSchema);

export default Restaurant;