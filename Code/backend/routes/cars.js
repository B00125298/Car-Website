// backend/routes/cars.js
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

// GET route to fetch all cars
router.get('/', carsController.getAllCars);

// POST route to search for cars
router.post('/search', carsController.searchCars);

// GET route to fetch details of a specific car
router.get('/:carId', carsController.getCarById);

module.exports = router;
