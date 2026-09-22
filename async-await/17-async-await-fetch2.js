async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const post = response.json()

    return post;
}

getPosts().then(post=>{
    console.log(post.title)
})