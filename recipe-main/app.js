require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes'); // ✅ keep only this one
const errorHandler = require('./middlewares/errorMiddleware');
const notFound = require('./middlewares/notFound');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());


console.log('Using Mongo URI:', process.env.MONGO_URI ? '✅ Found' : '❌ Not found');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/recipe_db';
connectDB(MONGO_URI);


app.use('/api/recipes', recipeRoutes);


app.get('/', (req, res) => {
  res.status(200).json({
    message: '🍳 Recipe API is running successfully!',
    version: '1.0.0',
  });
});


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


server.keepAliveTimeout = 120000;  
server.headersTimeout = 120000;    
