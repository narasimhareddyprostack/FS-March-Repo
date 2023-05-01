class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited")
    }
}

let a1 = new Account()
console.log(a1)
a1.open_Account()
a1.deposit_Amount()
let a2 = new Account()
console.log(a2)
a2.open_Account()
a2.deposit_Amount()


