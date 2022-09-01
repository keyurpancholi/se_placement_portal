const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('../backend/routes/admin')
const userRoutes = require('../backend/routes/user')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/admin', adminRoutes)
app.use(userRoutes)

app.listen(8080);
