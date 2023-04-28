class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully")
    }
    withdrawl() {
        console.log("No Money! come Next time")
    }
    get_Bal() {
        console.log("Server Busy")
    }
}

let a1 = new Account()
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()


