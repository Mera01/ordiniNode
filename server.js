const express = require("express");
const app = express();
require("./src/models/Order");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/orderProject');
const orderRoutes = require("./src/routes/order");
app.use(express.json());
app.use(orderRoutes);

const cors = require('cors');
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));


app.get("/test", (req, res) => {
  res.send("Test OK!");
});


app.listen( process.env.PORT ||  3000, () => {
  console.log("Listening on port 3000");
});

