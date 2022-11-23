const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config()

const adminRoutes = require("../backend/routes/admin");
const userRoutes = require("../backend/routes/user");

const app = express();
const port = process.env.PORT || 8080

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.statusCode
  const message = err.message
  const data = err.data
  res.status(status).json({message: message, data: data})
})

app.use("/admin", adminRoutes);
app.use(userRoutes);


mongoose.connect(
  process.env.MONGODB_URL
).then(res => {
  console.log('App connected succesfully')
  app.listen(port)
}).catch(err => {
  console.log(err)
});
