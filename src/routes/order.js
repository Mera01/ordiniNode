const express = require("express");
const mongoose = require("mongoose");

const Order = mongoose.model("Order");
const router = express.Router();
const URL = 'http:/localhost:5000/'


var cors = require('cors')

router.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));


router.get("/orders", async (req, res) => {
    try {
        const response = await Order.find();
        res.send(response);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.get("/orders", async (req, res) => {
    const { id } = req.body;
    try {
        const responce = await Orders.find({ _id: id });
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.delete("/order", async (req, res) => {
    const { id } = req.body;
    try {
        const responce = await Order.findByIdAndDelete({ _id: id });
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.put("/order", async (req, res) => {
    try {
        const responce = await Order.findByIdAndUpdate(id, req.body);
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.post("/orders", async (req, res) => {
    try {
        const annuncio = new Order(req.body);
        await annuncio.save();
        res.send(annuncio);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
module.exports = router;
