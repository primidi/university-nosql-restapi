const express = require('express');
const bodyParser = require('body-parser');

const studentRoute = require('./routes/student-route');
const lecturerRoute = require('./routes/lecturer-route');
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

// Lecturer route
app.use('/api/dosen', lecturerRoute);

app.listen(port, () => {
  console.log(`This test is listening at http://localhost:${port}`);
});
