function Car(name,price){
    this.name = name
    this.price = price
}

Car.prototype.color="White"

const car1 = new Car("hyundai", 1500000)
console.log(car1)

console.log(car1.color)

Car.prototype.displayCar = function(){
    console.log(this.name)
}

car1.displayCar()