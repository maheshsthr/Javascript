const getUser = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if(!response.ok){
            throw new Error("Failed to fetch")
        }
        const user = await response.json()

        console.log(user.name)
    }catch(error){
        console.log(error.message)
    }
}

getUser()