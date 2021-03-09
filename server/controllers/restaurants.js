import Restaurant from '../models/restaurant.js';

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRestaurant = async (req, res) => {
    try {
        // edit line below
        const restaurant = await Restaurant.find({ business_id: req.params.restaurantId });

        res.status(200).json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRestaurant = async (req, res) => {
    console.log(req.body);
    const restaurantInfo = req.body;

    const newRestaurant = new Restaurant(restaurantInfo);

    try {
        await newRestaurant.save();
        // 201: Succesful creation
        res.status(201).json(newRestaurant);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}