const newUser = {
    name: "vijayarangan",
    phone: 8903900892
}
fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(newUser)
})
.then((resolve) =>{
    return resolve.json()
})
.then((data) => {
    console.log(data)       // {name: 'vijayarangan', phone: 8903900892, id: 11}
})
