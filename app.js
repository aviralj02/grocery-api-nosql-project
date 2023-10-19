import express from 'express';
import groceryRoutes from './routes/grocery.js'
import connection from './connection.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use("/api", groceryRoutes);

connection();

app.listen(3001, () => console.log(`Server running on Port: 3001`));