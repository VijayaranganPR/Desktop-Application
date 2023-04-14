const p = document.getElementById('p')
const button = document.getElementById('button')


button.addEventListener('click',()=>{
    const newTextNode = document.createTextNode('YES ')  
    p.append(newTextNode)
})
