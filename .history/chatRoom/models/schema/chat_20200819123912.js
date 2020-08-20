const mongoose = require('mongoose')
const { Schema } = mongoose
const chatSchema = new Schema({
    nickName: String,
    avatar: String,
    content: String,
    createAt: { type: Date, default: new Date('<YYYY-mm-dd>') }
})

const model = mongoose.model('chats', chatSchema)

module.exports = {
    model
}

