let a = 50
let b = 30

if (a==b){
    console.log("Both Same")
}

a=50
b="50"
if(a===b){
    console.log("same with same data type")
}
else console.log("Not Same")

//=== compare datatype also so it returns not same bcause 5 and "5" have different datatypes


a=10
b=20

console.log(a>b) // false because a is not bigger than b
console.log(a>=b) // false becuase a is neither bigger nor equal to b

a= "21"
b= "200"
console.log(a>b)
// "21" is bigger because

age = "18"

age = Number(age)//convert datatype to actual one because it avoid false output
if (age>18)
    console.log("Eligible to Vote")
else console.log("Not Eligible")
