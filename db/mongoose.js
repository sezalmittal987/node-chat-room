const mongoose=require('mongoose')

// const mongooseConnect=mongoose.connect("mongodb+srv://sezalmittal:chatroompassword@cluster0-shgrk.mongodb.net/test?retryWrites=true&w=majority",{ 
//     useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false})

const mongooseConnect=mongoose.connect("mongodb://127.0.0.1:27017/chat-users",{ 
    useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false})