require('dotenv').config()
const express = require('express')
const app = require('express')()
const http = require('http').createServer(app)
const path = require('path')
const mongoose = require('mongoose')
const io = require('socket.io')(http, {
   cors: {
      origin: '*',
    }
})
const cors = require('cors')

const apiMsgRouter = require('./routers/api-msg-router')


const _dirname = path.resolve()
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(cors())

app.use('/api', apiMsgRouter)

let connections = 0
let users = 0

io.on('connection', function(socket) {
   console.log('User connected')
   connections++
   io.sockets.emit('change-online', connections)
   socket.on('disconnect', function () {
      console.log('User disconnected')
      connections--
      io.sockets.emit('change-online', connections)
   })

   socket.on('chat-message', data => {
      socket.broadcast.emit('chat-message', (data));
  })
})


const start = async () => {
   try {
      await mongoose
          .connect('mongodb+srv://mongo:mongo@cluster0.roihl.mongodb.net/techr-messenger', { useUnifiedTopology: true })
      http.listen(PORT, function() {console.log(`listening on *:${PORT}`);
      })
   } catch (e) {
      console.log(e)
   }
}

start()

// app.use(express.urlencoded({ extended: false }))
// app.use('/static', express.static(__dirname + '/dist'));
// app.use(express.static('dist'))

