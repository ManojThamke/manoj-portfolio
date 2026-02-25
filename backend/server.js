const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
    res.json({ message: 'MERN Portfolio Backend is running smoothly!' });
});

// Since it is just a portfolio, we might not need complex DB models unless requested
// But setting up mongoose connection for future proofing
/*
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
*/

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
