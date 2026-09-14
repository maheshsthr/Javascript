let vehicle = "Car" //global scope

function volvo(){
    let car = 'volvo'
    console.log(car)
    console.log(vehicle)
}

function bmw(){
    let car = 'bmw'
    console.log(car)
    console.log(vehicle)
}

volvo()
bmw()

//console.log(car)
//this line shows error because scope of car is limited to function
