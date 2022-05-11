const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        textBlock: {
            type: String,
            required: true 
        },
        userId: {
            type: String,
            required: true 
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('post', postSchema)