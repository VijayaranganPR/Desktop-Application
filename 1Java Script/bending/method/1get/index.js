fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'get'
})
.then((resolve)=>{
    return(resolve.json())
})
.then((data) =>{
    console.log(data)       // (100) [{…}, ..., {…}]
    console.log(data[0])    // {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
    console.log(data[0].title)    // sunt aut facere repellat provident occaecati excepturi optio reprehenderit
})
