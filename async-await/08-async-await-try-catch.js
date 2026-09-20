const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             reject("Failed to fetch data")
        }, 2000);
    })
}

async function callData(){
    try {
        await getData()
    }catch(error){
        console.log(error)
    }
}
callData()