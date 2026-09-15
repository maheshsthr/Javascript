const car = {
    brand: "KIA",
    name: "Sonet",
    model: "GTX Plus",
    engineSpec: "Diesel-Manual",
    registration: "GJ27DH8692",
    color: "White"
}

console.log(car)
delete car.registration
console.log(car)

car.registration = "GJ27DH8692"
console.log(car)

