let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("Data Inserted") : reject("Failed")
            employees.push(emp)
        }, 4000)
    })


}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                           <tr>`
        }
        //document.getElementById('tbody_Data').innerHTML = "GM"
        document.getElementById('tbody_Data').innerHTML = rows
    }, 2000)
}

let execute = async () => {
    await createEmployee({ id: 103, name: "priyanka", sal: 75000 })
    getEmployees()
}
execute()