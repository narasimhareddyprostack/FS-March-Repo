class Test {
    a = 100
    b = 200
    m1() { console.log("Test class - m1() method") }
    m2() { console.log("Test class - m2() method") }
    m3() { console.log("Test class - m3() method") }
}
//how to access class members(properties or method) using object
//how to create object
let t = new Test()
console.log(t.a)
console.log(t.b)
t.m1()
t.m2()
t.m3()