//import Account from './Account'
const Account = require('./Account')
class SA extends Account {
    min_Bal = 500
    acc_Bal;
    constructor(id, name, amount, loc) {
        super(id, name, loc)
        this.acc_Bal = amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let sa1 = new SA(101, "Rahul", 5000, "Wayanad")

console.log(sa1)