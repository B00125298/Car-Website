// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for user signup
router.post('/signup', authController.signup);

// POST route for user login
router.post('/login', authController.login);

module.exports = router;
