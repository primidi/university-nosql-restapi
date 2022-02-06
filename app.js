const express = require('express');
const bodyParser = require('body-parser');

const studentRoute = require('./routes/student-route');
require('./utils/db');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main API's page
app.get('/', (req, res) => {
  res.send('Welcome to University API!');
});

// Student route
app.use('/api/mahasiswa', studentRoute);

app.listen(port, () => {
  console.log(`This test is listening at http://localhost:${port}`);
});
