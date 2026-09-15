function car(name,year,price){
    this.name =name
    this.year = year
    this.price = price
    this.start = function(){
        console.log(`${this.name} Started`)
    }
}

const car1 = new car('KIA','SONET GTX',1500000)
console.log(car1)

const car2 = new car('Mahindra','XUV3XO AX7L',1600000)
console.log(car2)

const car3 = new car('Toyota','Legender Plus',6500000)
console.log(car3)

car1.start()
car2.start()
car3.start()