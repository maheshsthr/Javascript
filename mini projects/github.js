const getUser = async (username)=>{
    try {  
        const response = await fetch(`https://api.github.com/users/${username}`)
        const userProfile = await response.json()
        if(!response.ok){
            throw new Error("Failed to fetch User")
        }
        else{return userProfile;}
    }
    catch(error){
        console.log(error.message)
    }
}

const uname = "EnterGitHubUsername"
const user=getUser(uname).then((user)=>{
    console.log(`Github Profile`)
    console.log(`Name : ${user.name}`)
    console.log(`Location : ${user.location ?? "Not Provided"}`)
    console.log(`Bio : ${user.bio ?? "Not Provided"}`)
    console.log(`Public Repositories : ${user.public_repos}`)
    console.log(`Followers : ${user.followers} Followings : ${user.following}`)
    console.log(`Account Creation Date : ${new Date(user.created_at).toLocaleDateString()}`)
})

//name , location , bio , public repos , followers, following , created at