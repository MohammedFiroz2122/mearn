class Bank{

    validateAccount(accno){
        return accno in localStorage?true:false
    }



    authenticate(){
        let account_no=account.value;
        let password=pwd_login.value;

        if(this.validateAccount(account_no)){
            let data=JSON.parse(localStorage.getItem(account_no))
            if(data.password==password) {
                alert("login successful")
                sessionStorage.setItem("user",account_no)
                location.href="../home/index.html"
            }
            else{
                alert("invalid password")
            }
        }
        else{
            alert("invalid account number")
        }

    }

    
}

var bank=new Bank()