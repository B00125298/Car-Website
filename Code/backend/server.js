// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const carsRoutes = require('./routes/cars');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/cars', carsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Second Hand Car Sales Web Application!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
