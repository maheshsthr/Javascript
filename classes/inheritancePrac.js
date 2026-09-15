class vehicle {
    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
    }

    info(){
        console.log(`Brand : ${this.brand} \nSpeed : ${this.speed}`)
    }
}

class car extends vehicle{
    constructor(brand,speed,model){
        super(brand,speed)
        this.model=model
    }

    carinfo(){
        console.log(`${this.brand} ${this.model} is running at ${this.speed}`)
    }
}

const car1 = new car('Toyota',198,'Fortuner Legender')

car1.info()
car1.carinfo()