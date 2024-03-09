// app.js

const express = require('express');
const cors = require('cors')

const bodyParser = require('body-parser');
const { DB_connection } = require('./config/db');
const router = require('./router');


const app = express();
const PORT = process.env.PORT || 7000;

// MongoDB connection
DB_connection()




// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use('/', router);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
