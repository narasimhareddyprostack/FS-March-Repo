class Account {
    min_Bal = 500
    open_Account(name) {
        console.log("Hi", name, ":", "Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log(amount, "Amount Deposited",)
    }
    get_Bal() {
        return 5000 + 500
    }
}

let a1 = new Account()
a1.open_Account("Rahul")
a1.deposit_Amount(5000)

let bal = a1.get_Bal()
console.log(bal)

