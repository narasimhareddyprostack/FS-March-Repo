
let createEmployee = () => {
    console.log("create Employees")
}
let getEmployee = () => {
    console.log("get Employees")
}
setTimeout(() => {
    createEmployee()
}, 4000)
setTimeout(() => {
    getEmployee()
}, 2000)