async function test(){
    throw new Error("Faah!")
}

test()
.catch(e=>{
    console.log(e)
})
