const getData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Some Data")
        }, 2000);
    })
}

async function callData(){
    const data = await getData()
    console.log(data)
    console.log("Data Fetched")
}
callData() 
