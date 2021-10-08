var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1004,password:"userone",balance:9000},
    
}

function login(accno,password){
    if(accno in accounts){
        if(password==accounts[accno].password){
            console.log("login successful");
        }
        else{
            console.log("invalid password");
        }
    }
    else{
        console.log("invalid accno login failed");
    }
}
login(1001,"userone")