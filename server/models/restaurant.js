import mongoose from 'mongoose';

const restaurantSchema = mongoose.Schema({
    business_id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: String,
    latitude: Number,
    longitude: Number,
    stars: Number,
    categories: String,
    ambience: Number,
    service: Number,
    food: Number
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;