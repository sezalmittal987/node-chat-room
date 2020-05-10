const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
Username:{type:String,
    trim:true,},
    Email:{type:String,
        trim:true,
        unique:true,
      lowercase:true,},

pwd1:{type:String,
    trim:true,
minlength:7,}
        
})

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({ email })
//     if (!user) {
//         throw new Error('Unable to login')
//     }
//     const isMatch = await bcrypt.compare(password, user.password)
// if (!isMatch) {
//         throw new Error('Unable to login')
//     }

//     return user
// }

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('pwd1')) {
        user.pwd1 = await bcrypt.hash(user.pwd1, 8)
    }
    next()
})



userSchema.plugin(passportLocalMongoose)
const User=mongoose.model('User',userSchema)
module.exports=User