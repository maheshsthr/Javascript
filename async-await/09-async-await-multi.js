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
    const users = await getUser();
    const posts = await getPosts();

    console.log(users)
    console.log(posts)
}

getData();