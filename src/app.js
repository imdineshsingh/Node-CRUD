const { response } = require("express");
const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //used to receive request as json i.e// to use json data in our express

app.use(router); //register router
app.listen(port, () => {
  console.log(`connection is live at no. ${port}`);
});
