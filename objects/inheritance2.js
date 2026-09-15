const manager = {
    name : "Manager",
    salary : 50000
}
const employee = {
    name: "Employee",
    salary : 35000
}

function sayHi(){
    console.log(`Hello ${this.name}`)
}

manager.sayHi = sayHi;
employee.sayHi = sayHi;

manager.sayHi()
employee.sayHi()