import mongoose from 'mongoose';

const restaurantSchema = mongoose.Schema({
    business_id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: String,
    latitude: String,
    longitude: String,
    stars: String,
    categories: String,
    ambience: String,
    service: String,
    food: String,
    image_url: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'newyork_restaurants');

export default Restaurant;