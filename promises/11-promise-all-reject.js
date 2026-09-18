const p1 = Promise.resolve("Users")
const p2 = Promise.reject("Posts Failed")
const p3 = Promise.resolve("Comments")

Promise.all([p1,p2,p3])
.then(values=>{
    console.log(values)
}).catch((error)=>{
    console.log(error)
})

//Promise.all() rejects if even one Promise rejects.