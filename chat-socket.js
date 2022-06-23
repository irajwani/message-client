const token = document.getElementById('token');
const room = document.getElementById('room');

const socket = io(`http://localhost:3000?token=${token.value}&room=${room.value}`, { transport : ['websocket'] })

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
    socket.emit('message', { text: message.value })
}

socket.on('message', (messages) => {
    messages.forEach(message => {
        handleNewMessage(message);
    });
})

const handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message))
    return li;
}