// import express
const express = require('express')
//import data service
const dataService = require('./services/data.service')
//import session
const session = require('express-session')

//import jwt
const jwt = require('jsonwebtoken')


//create app using express
const app = express();

//use session
app.use(session({
    secret : 'randomsecurestring',
    resave : false,
    saveUninitialized:false
}))

//parsing
app.use(express.json())

//application specific middleware
app.use((req,res,next)=>{
    console.log("application specific middleware");
    next()
})

//router specific middleware
const logMiddleware = (req,res, next) => {
    if(!req.session.currentAcno){
        res.json({
          status:false,
          statusCode: 401,
          message: "please login"
        })
      }
      else{
          next()
      }
  
}

//JWT middlware
const jwtMiddleware = (req,res,next) => {
    try{
        const token = req.headers["x-access-token"]
        //token  validation
        const data = jwt.verify(token, 'supersecretkey123456')
        req.currentAcno = data.currentAcno
        next()
    }
    catch{
        res.json( {
            status:false,
          statusCode: 401,
          message: "please login"
        })
    }
}

//token API for testing
app.post('/token',jwtMiddleware,(req,res)=>{
    res.send(":"+req.currentAcno)
})


//define default router
app.get('/',(req,res)=>{
    res.status(404).send("server start at 3000")
})


app.post('/',(req,res)=>{
    res.send("server start at 3000")
})


//register API
app.post('/register',(req,res)=>{
    const result= dataService.register(req.body.acno,req.body.uname,req.body.pswd,)
    res.status(result.statusCode).send(result)
})


//login API
app.post('/login',(req,res)=>{
    const result= dataService.login(req.body.acno,req.body.pswd,)
    res.status(result.statusCode).send(result)
})


//deposit API
app.post('/deposit',jwtMiddleware,(req,res)=>{
    const result= dataService.deposit(req.body.acno,req.body.pswd,req.body.amt)
    res.status(result.statusCode).send(result)
})

//withdraw API
app.post('/withdraw',jwtMiddleware,(req,res)=>{
    const result= dataService.withdraw(req.body.acno,req.body.pswd,req.body.amt)
    res.status(result.statusCode).send(result)
})


//transaction API
app.post('/getTransaction',(req,res)=>{
    const result= dataService.getTransaction(req.body.acno)
    res.status(result.statusCode).send(result)
})

//set port
app.listen(3000,()=>{
    console.log("server started at 3000");
})
