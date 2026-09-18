const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("A")
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("B")
    }, 2000);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("C")
    },3000)
})

Promise.any([p1,p2,p3])
.then((firstOne)=>{
    console.log(firstOne)
}).catch(error=>{
    console.log(error)
})