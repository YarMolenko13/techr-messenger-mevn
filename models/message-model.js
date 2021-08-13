const {Schema, model} = require('mongoose')

const MassageSchema = new Schema({
    user: {type: String, required: true},
    text: {type: String},
    date: {type: String, default: String(new Date())}
})

module.exports = model('message', MassageSchema)