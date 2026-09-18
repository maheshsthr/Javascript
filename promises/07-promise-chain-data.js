const promise = new Promise((resolve)=>{
    resolve({name : "Mahesh", age : 20})
})

promise.then((value)=>{
    return value.name
})
.then((name)=>{
    console.log(`User : ${name}`)
})