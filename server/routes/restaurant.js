import express from 'express';

import { getRestaurants } from '../controllers/restaurant.js';

const router = express.Router();

router.get('/', getRestaurants);

export default router;