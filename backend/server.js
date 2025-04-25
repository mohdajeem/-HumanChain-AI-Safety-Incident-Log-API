// import express from 'express';
// import dotenv from 'dotenv';
// import connect from './config/db';
// dotenv.config();

// const app = express();
// connect();
// const PORT = env.process.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// })

// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import incidentRoutes from './routes/incident.js';

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/incidents', incidentRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
