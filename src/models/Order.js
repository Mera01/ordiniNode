const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    numero: {
        type: String,
        required: true
    },
    dataOrdine: {
        type: Date,
        required: true
    },
    totale: {
        type: Number,
        required: true
    },
    cliente: {
        type: {},
        required: true
    },
    listProdotti: {
        type: [],
        required: true
    },
}, { timestamps: true });
mongoose.model('Order', userSchema);





