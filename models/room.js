const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    Name:String,
    users:[{
        type:String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        default:undefined,    
}]
})

const Room=mongoose.model('Room',roomSchema)
module.exports=Room