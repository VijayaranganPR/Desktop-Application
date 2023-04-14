const newUser = {
    name: "vijayarangan",
    phone: 8903900892
}
fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'delete',
    headers: {
        'Content-Type': 'application/json'
      }
})
.then((resolve) =>{
    return resolve.json()
})
.then((data) => {
    console.log(data)       // {name: 'vijayarangan', phone: 8903900892, id: 11}
})
