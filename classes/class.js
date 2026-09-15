class Car{
    constructor(name,price){
        this.name= name
        this.price=price
    }
    start() {
        console.log(`${this.name} Started`)
    }
}

const car1= new Car('hyundai',1000000)
car1.start()
