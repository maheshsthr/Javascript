const promise = new Promise((resolve,reject)=>{
    reject("Error 404")
})

promise.catch((error)=>{
    console.log(error)
})
