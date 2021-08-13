const MessageModel = require('../models/message-model')
const MessageDto = require('../dtos/message-dto')

class MessageService {
    async getMessages() {
        const messages = await MessageModel.find()
        return messages
    }
    async createMessage(user, text, date) {
        const message = await  MessageModel.create({user, text, date})
        const messageDto = new MessageDto(message)
        return messageDto
    }
    async deleteMessages() {
        const messagesData = await MessageModel.deleteMany()
        return messagesData
    }
}

module.exports = new MessageService()