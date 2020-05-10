const express=require('express')
const router=express.Router()
const socketio=require('socket.io')
const http=require('http')
 const path=require('path')
const app = express()
const server = http.createServer(app)
const io = socketio.listen(server);
router.get('/chat',(req,res)=>{
    res.render('chat')
})
console.log('hkjh')
io.sockets.on('connection',()=>{console.log('connected')
})

module.exports=router 