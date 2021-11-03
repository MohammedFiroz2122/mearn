
class Bank {
    validateAccount(accno) {
        return accno in localStorage ? true : false
    }


    logout() {
        sessionStorage.removeItem("user")
        location.href = "../login/index.html"
    }

    getBalance() {
        let accno = sessionStorage.getItem("user")
        if (this.validateAccount(accno)) {
            let data = JSON.parse(localStorage.getItem(accno))
            return data.balance
        }
        else {
            alert("invalid account number")
        }
    }

    balanceEnquiry() {

        document.querySelector("#result").innerHTML = `<p> your available balance is ${this.getBalance()}</p>`

    }

    fundTransfer(){
        let to_accountnum = to_accno.value;
        let c_acno = c_accno.value;
        let amount = amnt.value;
        if (to_accountnum == c_acno) {
            
            if (this.validateAccount(c_acno)) {

                if (amount < Number(this.getBalance())) {
                    let user_acno = sessionStorage.getItem("user")
                    let payer_details = this.getAccountDetails(user_acno)
                    let receiver_details = this.getAccountDetails(c_acno)
                    let cur_bal = Number(receiver_details.balance)
                    let bal = cur_bal + Number(amount)
                    receiver_details["balance"]=bal
                    localStorage.setItem(c_acno, JSON.stringify(receiver_details))
                    payer_details["balance"] -= Number(amount)
                    localStorage.setItem(user_acno,JSON.stringify(payer_details))
                    alert("Transfer successful!", "Thankyou!", "success");
                }
            }
            else {
                alert("insufficient balance")
            }

        }
        else {
            alert("account number mismatch")
        }
    }

    getAccountDetails(accno) {
        return JSON.parse(localStorage.getItem(accno))
    }

}

var bank = new Bank()