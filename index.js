// server.js
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

const uploadRoutes = require('./route/upload');

// Load config
dotenv.config();
connectDB();


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
