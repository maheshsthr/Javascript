const p1 = Promise.resolve("Users")
const p2 = Promise.reject("Posts failed")
const p3 = Promise.resolve("Comments")

Promise.allSettled([p1,p2,p3])
.then(values=>{
    console.log(values)
})