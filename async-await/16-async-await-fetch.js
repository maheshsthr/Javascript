async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = response.json()

    return user
}

getUser().then(data=>{
    console.log(data.name)
})