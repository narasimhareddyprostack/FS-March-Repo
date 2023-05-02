class Account {
    constructor(id, name, loc) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Loc = loc
    }
}
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