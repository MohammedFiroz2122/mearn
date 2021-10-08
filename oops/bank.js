class Bank{
    createAccount(p_name,acno,ac_type,min_bal){
        this.p_name=p_name,
        this.acno=acno,
        this.ac_type=ac_type,
        this.balance=min_bal
    }
    deposit(amount){
        this.balance += amount
        console.log(`your accnt has been credited with ${amount} your available balance is ${this.balance}`);
    }
    withdrawal(amount){
        if(this.balance > amount){
            this.balance -= amount
            console.log(`your account has been debited with ${amount} your available balance is ${this.balance}`);
        }
        else{
            console.log("transaction failed due to insufficient fund");
        }
    }
}

var obj1=new Bank()
obj1.createAccount("Rahul",0250,"savings",5000)
obj1.deposit(3000)
obj1.withdrawal(5000)