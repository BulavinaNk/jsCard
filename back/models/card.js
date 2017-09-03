const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema( {
    title: {
        type: String,
        default: "noName"
    },
    desc: {
        type: String,
        default: "some to do"
    },
    date: {
        type: Date,
        default: Date.now
    },
} );

const CardModel = mongoose.model('Card', CardSchema );

module.exports = CardModel;