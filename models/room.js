const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    roomName:String,
    users:{
        type:[String],
        default:undefined,    
}
})

const Room=mongoose.model('Room',roomSchema)
module.exports=Room