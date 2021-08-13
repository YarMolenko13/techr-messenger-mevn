const messageService = require('../services/message-service')

class MessageController {
    async getMessages (req, res, next) {
        try {
            const messages = await messageService.getMessages()
            return res.json({messages})
        } catch (e) {
            console.log(e)
        }
    }
    async createMessage (req, res, next) {
        try {
            const {user, text, date} = req.body
            const data = await messageService.createMessage(user, text, date)
            return res.json(data)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteMessage (req, res, next) {
        try {
            const data = await messageService.deleteMessages()
            return res.status(200).json({status: 200, message: 'done'})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new MessageController()