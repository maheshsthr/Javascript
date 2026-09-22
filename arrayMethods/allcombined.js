const users = [
    {name : "Mahesh" , age : 19},
    {name : "Shubham" , age : 22},
    {name : "Gulshan", age : 17}
]

const adults = users.filter((user=>user.age>18)).map((user=>user.name))
console.log(adults)
