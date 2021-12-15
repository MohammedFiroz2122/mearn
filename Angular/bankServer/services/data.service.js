//import jwt
const jwt=require('jsonwebtoken')

database = {
  1000: { acno: 1000, password: "123", uname: "Aadhu", balance: 5000, transaction: [] },
  1001: { acno: 1001, password: "123", uname: "Aswin", balance: 6000, transaction: [] },
  1002: { acno: 1002, password: "123", uname: "Shibin", balance: 7000, transaction: [] }
}


const register = (acno, uname, password) => {


  if (acno in database) {
    return {
      status: false,
      statusCode: 401,
      message: "account already exist!! Please log in"
    }
  }
  else {
    database[acno] = {
      acno,
      uname,
      password,
      balance: 0,
      transaction: []
    }
    return {
      status: true,
      statusCode: 200,
      message: "Account successfully created"
    }
  }
}

const login = ( acno, password) => {
  // let database=this.data
  if (acno in database) {
    if (password == database[acno]["password"]) {
      currentUsername = database[acno]["uname"]
      //store acno in session
      // req.session.currentAcno = acno


      //token generation

      const token=jwt.sign({
        currentAcno:acno
       },'supersecretkey123456')
      // console.log(req.session);
      return {
        status: true,
        statusCode: 200,
        message: "Login successful",
        currentUsername: currentUsername,
        currentAcno: acno,
        token

      }
    }
    else {
      return {
        status: false,
        statusCode: 401,
        message: "invalid password"
      }
    }
  }
  else {
    return {
      status: false,
      statusCode: 401,
      message: "User does not exist"
    }
  }
}

const deposit = ( acno, pswd, amt) => {
  // let database=this.data
  let amount = parseInt(amt)

    
  if (acno in database) {
    if (pswd == database[acno]["password"]) {
      database[acno]["balance"] += amount
      database[acno]["transaction"].push({
        amount: amount,
        type: "CREDIT"
      })

      return {

        status: true,
        statusCode: 200,
        message: `${amount} is credited successfully.. New balance is ${database[acno]["balance"]}`,



      }
    }
    else {

      return {
        status: false,
        statusCode: 401,
        message: "invalid password"
      }
    }
  }
  else {

    return {

      status: false,
      statusCode: 401,
      message: "User does not exist"
    }
  }
}


const withdraw = (acno,pswd,amt) => {
  
  let amount=parseInt(amt)
  if(acno in database){
    if(pswd==database[acno]["password"]){
      if(database[acno]["balance"]>amount){
        database[acno]["balance"]-=amount
        database[acno]["transaction"].push({
          amount:amount,
          type:"DEBIT"
        })
        
        return {

          status: true,
          statusCode: 200,
          message: `${amount} is debited successfully.. New balance is ${database[acno]["balance"]}`,
  
  
  
        }
      }
      else{
        return {
          status: false,
          statusCode: 401,
          message: "insufficient balance"
        }
      }
      
    }
    else{
      
      return {
        status: false,
        statusCode: 401,
        message: "invalid password"
      }
    }
  }
  else{
    
    return {
      status: false,
      statusCode: 401,
      message:"user does not exist"
    }
  }
}

const getTransaction = (acno) => {


  if(acno in database){
    return {
      status:true,
      statusCode:200,
      transaction:database[acno]["transaction"]
    }
  }
  else{
    return {
      status: false,
      statusCode: 401,
      message:"user does not exist"
    }
  }
  
}

module.exports = {
  register, login, deposit,withdraw, getTransaction
}