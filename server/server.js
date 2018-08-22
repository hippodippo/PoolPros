require('dotenv').config();
const express = require('express');
const cors = require('cors');
const data = require('../dealers.json'); // Dealers Data

const app = express();
const port = process.env.SERVER_PORT || 3003;

app.use(cors());
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/dealers', (req, res) => {
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});