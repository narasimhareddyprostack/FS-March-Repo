let enames = ["nagraj", "naveen", "sreenu", "monohar"]

//construct new array - with upper case letter

let new_Enames = enames.forEach((ename) => {
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames)