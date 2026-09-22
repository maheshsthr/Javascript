const getUser = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Users")
        }, 2000);
    })
}

const getPosts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Posts Failed")
        }, 3000);
    })
}

async function getData(){
    try {
        const [users,posts] = await Promise.all([
            getUser(),
            getPosts()
        ])
    }
    catch(e){
        console.log(e)
    }
}
getData()