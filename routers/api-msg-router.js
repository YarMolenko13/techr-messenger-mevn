const Router = require('express').Router
const controller = require('../controllers/message-controller')


const router = new Router()

router.get('/msgs', controller.getMessages)
router.post('/msgs', controller.createMessage)
router.delete('/msgs', controller.deleteMessage)


module.exports = router