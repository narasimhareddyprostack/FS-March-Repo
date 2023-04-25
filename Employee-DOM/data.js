let employees = [
    { id: 101, name: 'Rahul Gandhi', salary: 45000 },
    { id: 102, name: 'Sonai Gandhi', salary: 55000 },
    { id: 103, name: 'Priyanka Gandhi', salary: 65000 },
    { id: 104, name: 'Modi JI', salary: 75000 },
    { id: 101, name: 'Rahul Gandhi', salary: 45000 },
    { id: 102, name: 'Sonai Gandhi', salary: 55000 },
    { id: 103, name: 'Priyanka Gandhi', salary: 65000 },
    { id: 104, name: 'Modi JI', salary: 75000 }
]

function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
            <td>${employee.id}</td >
            <td>${employee.name}</td >
            <td>${employee.salary}</td >
        </tr >`
    }
    //document.getElementById('abc').innerHTML = "GM"
    document.getElementById('abc').innerHTML = rows
}