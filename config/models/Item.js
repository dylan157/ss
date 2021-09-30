const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    priceID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Item', ItemSchema)