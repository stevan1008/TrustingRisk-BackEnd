const mongoose = require('mongoose')
const CostumerSchema = new mongoose.Schema({
    fechaDocumento: {
        type: Date,
        required: true,
    },
    nombreCliente: {
        type: String,
        required: true,
        trim: true,
    },
    nit: {
        type: String,
        required: true,
        trim: true
    },
    numeroBancario: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Costumer', CostumerSchema)