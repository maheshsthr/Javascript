const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("User")
    },1000)
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Posts")
    },2000)
})

const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Comments")
    },3000)
})

Promise.all([p1,p2,p3])
.then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log(error)
})