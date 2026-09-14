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


{
    let x =5
    console.log(x)
}
//console.log(x) this line shows error because scope is limited by let and const 

{
    var y = 5
    console.log(y)
}
console.log(y) //this is usable ouside block because a variable declared with var keyword can be accessed out of block


