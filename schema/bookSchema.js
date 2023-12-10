const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    available: {
        type: Boolean,
        default: 'true',
    },
    edition: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Book", bookSchema);
