async function getData(){
    const data = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Some Data")
        }, 2000);
    })
    console.log(data)
}

getData()
