const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Todo', TodoSchema)