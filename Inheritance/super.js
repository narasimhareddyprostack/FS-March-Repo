class Parent {
    assets = 1000
}
class Child extends Parent {
    assets = 20000;
    constructor() {
        super();
        this.a = Parent.assets
    }
    m1() {
        console.log(super.assets)
        this.a = super.assets
    }
}
let obj = new Child()

console.log(obj)
obj.m1()
console.log(obj.a)