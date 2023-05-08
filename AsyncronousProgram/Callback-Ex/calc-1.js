let sum = (a, b) => {
    return a + b
}
let multi = (a, b) => {
    return a * b
}
let calC = (a, b, callback) => {
    return callback(a, b)
}

let r1 = calC(10, 20, sum)
let r2 = calC(10, 20, multi);
console.log(r1)
console.log(r2)