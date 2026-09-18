const promise = new Promise((resolve)=>{
    resolve(10)
})

promise.then((value)=>{
    return value *2
})
.then((value)=>{
    return value + 5
})
.then((value)=>{
    console.log(value)
})