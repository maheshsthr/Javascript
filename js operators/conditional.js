//if 

let num = 100
if (num>101){
    console.log("Greater than 100")
}

//if else 
if (num > 101){
    console.log("Greater than 100")
}
else console.log("Less than 100")

//else if ladder

if (num>101){
    console.log("Bigger")
}
else if (num == 101){
    console.log("Equal")
}
else {
    console.log("Smaller")
}

//switch

let month = 2
switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    default: console.log("Other than Jan , Feb & Mar")
}

let x=5,y=10

let result = x>y ? "X is Big" : "Y is big"
console.log(result)

//ternary operator
