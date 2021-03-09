import express from 'express';

import { getRestaurants, getRestaurant, createRestaurant } from '../controllers/restaurants.js'

const router = express.Router();

router.get('/:restaurantId', getRestaurant );
router.get('/', getRestaurants );
router.post('/', createRestaurant );

export default router;