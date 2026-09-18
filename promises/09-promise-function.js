const getUser = ()=>{
    return new Promise((resolve)=>{
        resolve({name: "Mahesh", age:20})
    })
}

getUser()
.then((value)=>{
    console.log(value.name)
})