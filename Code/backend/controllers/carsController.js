// backend/controllers/carsController.js
const db = require('../database/db');

// Function to fetch all cars
exports.getAllCars = (req, res) => {
  const sql = 'SELECT * FROM cars';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

// Function to search for cars based on criteria
exports.searchCars = (req, res) => {
  const { make, model, minYear, maxYear, minPrice, maxPrice } = req.body;
  let sql = 'SELECT * FROM cars WHERE 1';

  if (make) sql += ' AND make = ?';
  if (model) sql += ' AND model = ?';
  if (minYear) sql += ' AND year >= ?';
  if (maxYear) sql += ' AND year <= ?';
  if (minPrice) sql += ' AND price >= ?';
  if (maxPrice) sql += ' AND price <= ?';

  const values = [make, model, minYear, maxYear, minPrice, maxPrice];
  
  db.query(sql, values, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

// Function to fetch details of a specific car by ID
exports.getCarById = (req, res) => {
  const carId = req.params.carId;
  const sql = 'SELECT * FROM cars WHERE id = ?';
  db.query(sql, [carId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json(results[0]);
  });
};
