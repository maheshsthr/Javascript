class Car {
    constructor(name,price){
        this.name=name
        this.price=price
    }
    start(){
        console.log(`${this.name} Started`)
    }
}

class electricCar extends Car{
    charging(){
        console.log(`${this.name} is Charging`)
    }
}

const car1 = new electricCar('tesla',10000000)
car1.charging()