const express = require("express");
const mongoose = require("mongoose");

const Order = mongoose.model("Order");
const router = express.Router();



var cors = require('cors')


router.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));

const security = require('../util/security')

router.get("/orders",security.verifyToken, async (req, res) => {
    try {
        const response = await Order.find();
        res.send(response);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.get("/order/{id}",security.verifyToken, async (req, res) => {
    const  id  = req.query.id;
    try {
        const responce = await Order.find({ _id: id });
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.delete("/order", security.verifyToken , async (req, res) => {
    const { id } = req.body;
    try {
        const responce = await Order.findByIdAndDelete({ _id: id });
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.put("/order",security.verifyToken , async (req, res) => {
    const { id } = req.body;
    try {
        const responce = await Order.findByIdAndUpdate(id, req.body);
        res.send(responce);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});
router.post("/order", security.verifyToken , async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.send(order);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
