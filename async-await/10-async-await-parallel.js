const getUser = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Users")
        }, 2000);
    })
}

const getPosts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Posts")
        }, 3000);
    })
}

async function getData(){
    const [users,posts] = await Promise.all(
        [
            getUser(),
            getPosts()
        ]
    )
    console.log(users,posts)
}

getData();