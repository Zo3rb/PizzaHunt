require("dotenv").config({});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


// Initiate The App.
const app = express();
const PORT = process.env.PORT || 3001;

// Register Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));

// Register Routes.
app.use(require('./routes'));

// Create The Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// Launching the App.
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
