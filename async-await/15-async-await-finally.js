async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data received")
        }, 2000);
    })
}

getData().then(data=>{
    console.log(data)
}).finally(()=>{
    console.log("operation completed")
})