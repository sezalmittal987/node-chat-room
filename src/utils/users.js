const User=require('../../models/user')
const Room=require('../../models/room')

const registerUser=async({id,username,room})=>{
  const user=await User.findOne({Username:username})
 await user.update(user,{$set:{socket_id:id,room:room}})
}



const findUser=async(id)=>{
   const user=await User.findOne({socket_id:id})
   return user
}

module.exports={
    registerUser,findUser
}