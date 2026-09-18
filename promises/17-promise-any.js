const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("A")
    },1000)
})
const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("B")
    }, 2000);
})
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("C")
    },3000)
})

Promise.any([p1,p2,p3])
.then((firstOne)=>{
    console.log(firstOne)
})