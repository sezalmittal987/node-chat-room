const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    Name:String,
    users:[{
        user:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }}
            }]
})

const Room=mongoose.model('Room',roomSchema)
module.exports=Room