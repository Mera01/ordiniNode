const express = require("express");
const app = express();
require("./src/models/Order");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/orderProject');
const orderRoutes = require("./src/routes/order");
app.use(express.json());
app.use(orderRoutes);

const port = 3000

const cors = require('cors');
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));


app.get("/test", (req, res) => {
  res.send("Test OK!");
});




app.listen(port, () => {
  console.log('Server listen on port ' + port)
})




