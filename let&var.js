let x = 10
for (let i = 0; i<5;i++)
{
    let x =2
    console.log(x)
}

console.log(x)


//let is block scoped, meaning that the variable x declared inside the for loop is only accessible within that block. The outer variable x remains unchanged and retains its value of 10. Therefore, the output of the code will be:
//var is function scoped, meaning that the variable x declared inside the for loop would be accessible outside of that block as well. If we were to use var instead of let, the output would be different. The inner variable x would overwrite the outer variable x, and the final output would be 2 instead of 10.

