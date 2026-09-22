const arr = [1,2,3,4,5,6,7]

arr.forEach((num)=>{
    console.log(num*2)
})

console.log('\n')
arr.filter(num=>num%2==0).forEach((num=>{
    console.log(num*2)
}))
