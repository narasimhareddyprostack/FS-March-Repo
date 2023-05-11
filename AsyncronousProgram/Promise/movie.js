let goToMovie = (success, failure) => {
    let amount = 100
    amount > 500 ? success("Go To Movie + Caramel POP")
        : failure("Go to PG + Take rest")


}

goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})