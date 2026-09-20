const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Error from getData()")
        }, 2000);
    })
}
async function callData(){
    try{
        const error = await getData()
    }catch(e){
        console.log(e)
    }
}
callData()