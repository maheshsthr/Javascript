async function getUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error("Failed to fetch")
        }
        const users =await response.json()

        for (let user of users){
            console.log(user.name)
        }
    }catch(error){
        console.log(error.message)
    }
}
getUser()