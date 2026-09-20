async function getData(){
    const data = await Promise.resolve("Some Data")
    console.log(data)
}

getData()