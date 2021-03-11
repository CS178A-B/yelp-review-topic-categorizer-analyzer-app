import axios from 'axios';

const url = 'http://localhost:5000/restaurant';

// rename this later
export const fetchRestaurants = () => axios.get(url);
export const fetchRestaurant = (restaurantId) => axios.get(`${url}/${restaurantId}`);