let user = { id: 101, name: "Rahul", email: "rahul@gmail.com" }
let details = { email: "rahul@pm.com", sal: 45000 }
let user_Details = { ...user, ...details }
//let test = [...user, ...details]


console.log(user_Details)
//console.log(test)