import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Incident from '../models/Incident.js';
import connectDB from '../config/db.js';

dotenv.config();

const seedData = [
  {
    title: 'Autonomous Car Misjudgment',
    description: 'AI in self-driving car failed to detect a pedestrian at night.',
    severity: 'High',
  },
  {
    title: 'Chatbot Gave Biased Answers',
    description: 'AI chatbot gave discriminatory responses due to biased training data.',
    severity: 'Medium',
  },
  {
    title: 'Spam Filter Blocked Critical Emails',
    description: 'An AI email filter incorrectly blocked important health updates.',
    severity: 'Low',
  },
];

const seedIncidents = async () => {
  try {
    await connectDB();
    await Incident.deleteMany(); // Optional: Clears previous data
    const inserted = await Incident.insertMany(seedData);
    console.log('Sample Incidents Seeded:', inserted);
    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedIncidents();
