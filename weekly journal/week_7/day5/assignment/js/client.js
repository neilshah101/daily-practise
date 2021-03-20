const chatMessageTextBox = document.getElementById("chatMessageTextBox")
const usernameTextBox = document.getElementById("usernameTextBox")
const sendButton = document.getElementById("sendButton")
const messagesUL = document.getElementById("messagesUL")




sendButton.addEventListener('click', () => {

    const username = usernameTextBox.value
    const chatMessage = chatMessageTextBox.value
        // send a message to the server 
        //socket.emit('Houston', chatMessage)
        // send an object to the server 
    socket.emit('Movieverse', { username: username, message: chatMessage })
})

// client listening for messages from the server 
/*
socket.on('Houston', (message) => {
    const messageItem = `<li>${message}</li>`
    messagesUL.insertAdjacentHTML('beforeend', messageItem)
    console.log(message)
}) */

// Username and chat message 
socket.on('Movieverse', (chats) => {

    allmessage = chats.map((chatMessage) => {

        return `<li>${chatMessage.username}: ${chatMessage.message}</li>`
    })
    messagesUL.innerHTML = allmessage.join("")
    console.log(chats)

})