const express=require('express')
const socketio=require('socket.io')
const http=require('http')
const router=express.Router()
 const app = express()
const server = http.createServer(app)
const io = socketio.listen(server);


module.exports=(io)=>{
    io.on('connection',()=>{
        console.log('New WebSocket connection')
        })
        
}