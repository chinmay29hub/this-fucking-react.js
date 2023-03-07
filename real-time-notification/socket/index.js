const { Server } = require("socket.io");
const dotenv = require('dotenv').config();
const cors = require("cors")


const io = new Server({
    cors : {
        origin : "https://realtime-notifications-frontend.onrender.com",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.use(cors())

let onlineUsers = []

const addNewUser = (username, socketId) => {
    !onlineUsers.some(user => user.username === username) && onlineUsers.push({ username, socketId })
}

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
}

const getUser = (username) => {
    return onlineUsers.find(user => user.username === username)
}

io.on("connection", (socket) => {
//   console.log("Connected succesfully")
    // io.to().emit("firstEvent", "hello this a first event")
    socket.on("newUser", (username) => {
        addNewUser(username, socket.id)
    })

    socket.on("sendNotification", ({ senderName, receiverName, type }) => {
        const receiver = getUser(receiverName)
        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            type,
        })
    })

  socket.on("disconnect", () => {
    // console.log("disconnected successfully")
    removeUser(socket.id)
  })

});

const port = process.env.PORT || 5000

io.listen(port);
console.log(`Server listening on port ${port}`)