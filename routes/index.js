const express=require('express')
const router=express.Router()
const passport=require('passport')
const User=require('../models/user')
const Room=require('../models/room')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const bcrypt=require('bcryptjs')
const flash=require('flash')

router.get('/',(req,res)=>{
    res.render('home')
})

router.post("/",passport.authenticate("local",
{
    successRedirect: "/rooms",
    failureRedirect: "/",
    failureFlash: true
}),function(req,res){
console.log('yes')
})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',(req,res)=>{
if(req.body.pwd1!==req.body.pwd2){
    req.flash("error","Enter same password")
    res.redirect('register')
}

 var user=new User({
     Username:req.body.Username,
     Email:req.body.Email,
     pwd1:req.body.pwd1
 })
user.save().then(() => {
    console.log('123')
    req.flash('success', 'You are now registered and can log in');
        console.log('456')
       res.redirect('/rooms')
        console.log('789')
      }).catch(err => {
          console.log('910')
          console.log(err)
    req.flash('error',err.message)});
    res.redirect('/register')
  });
const user1=new User({
    Username:'usr4',
    Email:'sf@f.cscdasm'
})
user1.save()
const room1=new Room({
    Name:'room2',
    users:[{
       user: user1._id
    }]
})
room1.save()
router.get('/rooms',(req,res)=>{ 
    Room.find({}).populate('users').exec((error,rooms)=>{
      if(error){return console.log(error)}
        res.render('rooms',{rooms})
    })
    
})



module.exports=router