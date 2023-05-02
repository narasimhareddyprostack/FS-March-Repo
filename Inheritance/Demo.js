class A {
    name = "Hari"
    m1() {
        console.log("Class A")
    }
}
class SA extends A {
    m2() {
        console.log("Class SA")
    }
}
class CA extends SA {
    name = "Priyanka"
    m3() {
        console.log("Class CA")

    }
}

let ca1 = new CA()
ca1.m1()
ca1.m2()
ca1.m3()
console.log(ca1)