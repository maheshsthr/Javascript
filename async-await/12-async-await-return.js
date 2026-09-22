async function getData(){
    const data = await Promise.resolve("Data")
    return data;
}

console.log(getData()) //this return promise not "data" because its and async function

getData().then(data=>{
    console.log(data)
})