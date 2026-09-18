const promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data Received")
    },2000)
})

promise.then((value)=>{
    console.log(value)
})