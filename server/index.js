const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Server
const server = express();

// Conectar DB
connectDB();

server.use(cors());

// bodyParser
server.use(express.json());

// Routes
server.use('/api/users', require('./routes/users'));
server.use('/api/auth', require('./routes/auth'));

// Puerto de la app para el deployment
const port = process.env.PORT || 4000;
server.listen(port, '0.0.0.0', () => {
    console.log("Server running");
})