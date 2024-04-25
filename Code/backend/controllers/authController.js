// backend/controllers/authController.js
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const db = require('../database/db');

// Function to handle user signup
exports.signup = (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Save user details to the database
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hash], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create user' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
};

// Function to handle user login
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Check if user with provided email exists
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      // Return success message or token for further authentication
      res.status(200).json({ message: 'Login successful' });
    });
  });
};
