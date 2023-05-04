class CA extends Account {
    min_Bal = 25000
    acc_Bal;
    constructor(id, name, amount, loc) {
        super(id, name, loc);
        this.acc_Bal = amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let ca1 = new CA(102, "Priyanka", 40000000, "New Delhi")

console.log(ca1)
console.log(sa1.get_Bal())
console.log(ca1.get_Bal())