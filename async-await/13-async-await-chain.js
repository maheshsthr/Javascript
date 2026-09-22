async function getData() {
    let value = await Promise.resolve(10)
    value = value *2
    value = value +5
    return value;
}

getData().then((data)=>{
    console.log(data)
})