function outer() {
    console.log("Outer fun")
    function inner() {
        console.log("Inner fun")
    }
    inner()
}
outer()
