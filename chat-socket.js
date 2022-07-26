const token = document.getElementById("token");
const SERVER = 'http://localhost:81';

const socket = io(
  `${SERVER}?token=${token.value}`,
  { transport: ["websocket"] }
);


const username = document.getElementById("username");
const message = document.getElementById("message");
const messages = document.getElementById("messages");

const handleSubmitNewMessage = () => {
  socket.emit("message", { text: message.value, recipient: username.value });
};

socket.on("message", (messages) => {
  messages.forEach((message) => {
    handleNewMessage(message);
  });
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  return li;
};

