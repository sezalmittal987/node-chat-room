const express=require('express')
const expressLayouts=require('express-layouts')
const flash=require('flash')
const session=require('express-session')
const passport=require('passport')
const LocalStrategy=require('passport-local')
require('./db/mongoose')
const port=process.env.PORT||0811
const app=express()
const indexRouter=require('./routes/index')
const chatRouter=require('./routes/chat')
const bodyParser=require('body-parser')
app.locals.moment = require("moment");
require('./config/passport')(passport);
const User=require('./models/user')
app.set('view engine','ejs')
app.use(session({
    secret: 'This is my secret key',
    resave: false,
    saveUninitialized: true,})); 
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const server = require('http').createServer(app)


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
     res.locals.error = req.flash('error');
     res.locals.success = req.flash('success');
     next();
 }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))
app.use(expressLayouts)
app.use(indexRouter)
app.use(chatRouter)



server.listen(port,()=>{
    console.log('server is up')
})