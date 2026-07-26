const cors = require('cors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/auth'); //authentication routes

const app = express();

app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);
app.use('/auth', authRoutes); //authentication routes

mongoose.connect('mongodb://localhost:27017/bookdb', {
    family: 4
})
    .then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server running on port http://localhost:5000'));