const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
    os: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
})

//Create a collection
const Vote = mongoose.model('Vote', voteSchema)

module.exports = Vote