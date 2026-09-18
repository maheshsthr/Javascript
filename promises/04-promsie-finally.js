const promise = new Promise((resolve)=>{
    resolve("Success")
})

promise.then((value)=>{
    console.log(value)
})
.finally(()=>{
    console.log("Completed")
})