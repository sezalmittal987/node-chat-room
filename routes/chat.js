const express=require('express')
const socketio=require('socket.io')
const http=require('http')
const router=express.Router()
 const app = express()
const server = http.createServer(app)
const io = socketio.listen(server);
const {findUser,registerUser}=require('../src/utils/users')
const {generateMessage}=require('../src/utils/messages')
module.exports=(io)=>{
    io.on('connection',(socket)=>{
        console.log(`${socket.id} WebSocket connection`)
socket.on('join',({username,room},callback)=>{
        registerUser({id:socket.id,username,room}).catch(e=>console.log(e))
        socket.emit('message', generateMessage('Admin', 'Welcome!'))
        socket.broadcast.to(room).emit('message',generateMessage('Admin',`${username} has joined!!`))
        callback()
})

socket.on('sendMessage',(message,callback)=>{
        const user=findUser(socket.id)
        io.emit('message',generateMessage(user.username,message))
        callback()
})
})   
}