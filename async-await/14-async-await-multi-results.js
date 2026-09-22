async function getUser(){
    return new Promise((resolve,reject)=>{
        resolve("User")
    })
}

async function getPosts(){
    return new Promise((resolve,reject)=>{
        resolve("Posts")
    })
}

async function getData(){
    const users = await getUser()
    const posts = await getPosts()
    return {user : users, post : posts}
}

getData().then((data)=>{
    console.log(data)
})