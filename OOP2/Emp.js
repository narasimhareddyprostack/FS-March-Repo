class Employee {
    emp_Id;
    emp_Name;
    constructor(id, name) {
        this.emp_Id = id
        this.emp_Name = name
    }
}

let e1 = new Employee(101, "Rahul")
let e2 = new Employee(102, "Sonia")
console.log(e1)
console.log(e2)

console.log(e1.emp_Id)
console.log(e2.emp_Id)