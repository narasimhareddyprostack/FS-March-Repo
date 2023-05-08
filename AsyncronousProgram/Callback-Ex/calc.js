let calC = (a, b, op) => {
    if (op == "sum") {
        return a + b
    }
    if (op == "multi") {
        return a * b
    }
}

let r1 = calC(10, 20, "sum");
let r2 = calC(10, 20, "multi");
console.log(r1)
console.log(r2)