const promise = new Promise((resolve)=>{
    resolve("Hello from string")
})

promise.then((value)=>{
    console.log(value)
})