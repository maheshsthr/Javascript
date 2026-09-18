const promise = new Promise((resolve)=>{
    resolve(10)
})

promise.then((value)=>{
    return value *2 
})
.then((value)=>{
    throw new Error("calc failed") 
})
.catch((error)=>{
    console.log(error)
})