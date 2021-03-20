const express = require('express')
const router = express.Router()
const http = require('http').Server(router)
const io = require('socket.io')(http)

router.use('/js', express.static('js'))




router.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/chats.html')
})

allChatMessages = []


io.on('connection', (socket) => {
    console.log('User connected!')

    io.emit('Houston', (allChatMessages))

    socket.on('disconnect', () => {
        console.log('User disconnected!')
    })

    // listen on a channel 
    /*
    socket.on('Houston', (message) => {
        io.emit('Houston', message) 
    }) */

    socket.on('Houston', (chat) => {
        allChatMessages.push(chat)
        io.emit('Houston', allChatMessages)
    })

})


module.exports = router