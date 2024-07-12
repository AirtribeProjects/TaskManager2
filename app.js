const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./DB/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/TaskRoutes');
const teamRoutes = require('./routes/TeamRoutes');
// Connect Database
connectDB();

const app = express();

app.use(bodyParser.json());

// Routes for user APIs
app.use('/users', userRoutes);

// Routes for task APIs
app.use('/tasks', taskRoutes);

//Routes for team APIs
app.use('/teams', teamRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



