

//bank
//authenticate
//fund transfer 

class bank {
    session={}

    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }

    getAccountDetails() {
        return this.accounts
    }

    validateAccountNumber(accno) {
        return accno in this.accounts?true:false
    }

    authenticate(accno,password){
        if(this.validateAccountNumber(accno)){
            let pwd=this.accounts[accno].password
            if(pwd==password){
                this.session["user"]=accno //{user:accno}
                // return 1 //success
                console.log("successful");
            }
            else{
                // return //invalid psswd
                console.log("invalid psswrd");
            }
        }
        else{
            // return 0
             console.log("invalid accno")
        }
    }

    balanceEnquiry(){
        var user=this.session["user"]
        return this.accounts[user].balance
    }

    fundTransfer(to_acc,amount){
        if(this.validateAccountNumber(to_acc)){
            let user=this.session["user"]
            let bal=this.balanceEnquiry()
            if(bal>amount){
                //debit
                this.accounts[user].balance -= amount

                //credit
                this.accounts[to_acc].balance += amount

                this.accounts[user].transactions.push({to:to_acc,amount:amount})
                console.log(this.accounts[user]);
            }
            else{
                console.log("insufficient balance");
            }
        }
        else{
            console.log("invalid accnt");
        }
    }

    paymentHistory(){
        let user=this.session["user"]
        console.log(this.accounts[user].transactions);
    }

   transactionHistory(){
       //transaction
       let user=this.session["user"]    //1002
       var transaction_history=this.accounts[user].transactions
       console.log(transaction_history);

   }
    creditTransaction(){
       var user= this.session["user"]
       var credit=[]
        for(let account in this.accounts){ 
        let trans=this.accounts[account].transactions
            for(let transaction of trans){
                if(transaction.to==user){
                    credit.push({from:account,amount:transaction.amount})
                }
            }
            
        }
        console.log(credit);
    }

}




var obj = new bank()
// console.log(obj.getAccountDetails());
// console.log(obj.validateAccountNumber(1002));
var user=obj.authenticate(1001,"userone")
// console.log(obj.balanceEnquiry());
// obj.fundTransfer(1003,5000)
// obj.paymentHistory()
obj.transactionHistory()
obj.creditTransaction()