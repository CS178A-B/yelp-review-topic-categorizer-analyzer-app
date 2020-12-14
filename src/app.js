// Setup Guide: https://blog.logrocket.com/mern-stack-a-to-z-part-1/

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const reviews = require('./routes/api/reviews');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/reviews', reviews);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));