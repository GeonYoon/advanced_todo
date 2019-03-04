// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup

// Redis Client Setup


// Express route handlers



app.post('/pass', async (req, res) => {
  const index = req.body.value;
  console.log("here");
  res.send(index+1);
});


app.listen(5000, err => {
  console.log('Listening');
});
