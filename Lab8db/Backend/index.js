const express = require("express");
const { mongoose } = require("./db");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on --> http://localhost:3000 <--`);
});

const BookCtrl = require('./controllers/BookController');
app.use('/Books', BookCtrl)
