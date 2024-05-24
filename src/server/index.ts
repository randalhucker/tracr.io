import express from 'express';
import path from 'path';
import sequelize from './sequelize';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Define the root route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

// Use user routes
app.use('/users', userRoutes);

// Sync database and start server
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', (error as Error).message);
});
