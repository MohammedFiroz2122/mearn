class Bank{
    createAccount(){
        let first_name=fname.value;
        let acno=accno.value;
        let password=pwd.value;
        let balance=bal.value;

        var person={
            first_name,
            acno,
            password,
            balance
        }
        console.log(person);


        localStorage.setItem(person.acno,JSON.stringify(person))
        alert("account created successfully")
        location.href="../login/index.html"
        
    }



}
var bank=new Bank()


// let validateAccount=(accno)=>{
//     return accno in localStorage?true:false
// }




// let getBalance=(accno)=>{
//     if(validateAccount(accno)){
//         let data=JSON.parse(localStorage.getItem(accno))
//         return data.balance
//     }
// }

// console.log(getBalance(1001));


// let authenticateAccount=(accno,password)=>{
    
//     if(validateAccount(accno)){
//         let data=JSON.parse(localStorage.getItem(accno))
//         return data.password==password?"success":"invalid password"
//     }
//     else{
//         return "invalid account number"
//     }
// }

// console.log(authenticateAccount(1003,2122));


// function fundTransfer(from_ac,to_ac,amount){
//     if(validateAccount())
// }