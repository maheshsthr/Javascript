const promise = new Promise((resolve)=>{
    resolve(100)
})

promise.then((value)=>{
    console.log(value)
})