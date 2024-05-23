import express from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const port = 3000;

// Initialize Sequelize to connect to PostgreSQL
const sequelize = new Sequelize('postgres://user:password@db:5432/mydatabase');

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });
