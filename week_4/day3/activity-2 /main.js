const postsol = document.getElementById("postsol")

for (let i = 0; i < posts.length; i++) {

    let post = posts[i]
    const postitem = `
    <div>id:${post.id} </div><br>
    <div> title: ${post.title}</div><br>
    <div>body: ${post.body}</div><br><br><br>
    `
    postsol.insertAdjacentHTML('beforeend', postitem)
}