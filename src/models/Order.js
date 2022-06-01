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
        type: Object,
        required: true
    },
    listProdotti: {
        type: Array,
        required: true
    },
}, { timestamps: true });
mongoose.model('Order', userSchema);





