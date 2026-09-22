const arr = [1,2,3,4,5,6,7]
console.log(arr)

const sum = arr.reduce((acc,num)=>{
    return acc+num
},0)

console.log(sum)

const prod = arr.reduce((acc,num)=>{
    return acc*num
},1)
console.log(prod)
