let cars = [{ model: 'swift', brand: "maruthi", color: "white", price: 800000 },
{ model: '800', brand: "maruthi", color: "red", price: 300000 },
{ model: 'nexon', brand: "tata", color: "blue", price: 1500000 },
{ model: 'x1', brand: "BMW", color: "white", price: 3800000 },
{ model: 'mustang ', brand: "ford", color: "gray", price: 6000000 },
{ model: 'seconds', brand: "maruthi", color: "red", price: 200000 },
{ model: 's1', brand: "tesla", color: "blue", price: 8000000 }]

let new_Cars = cars.filter((car) => {
    return car.brand == "maruthi"
})

console.log(new_Cars)