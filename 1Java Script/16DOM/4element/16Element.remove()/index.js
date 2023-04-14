const p = document.getElementsByTagName('p')
console.log(p);             // HTMLCollection(2) [p, p, p]
setTimeout(() => {
    p[1].remove()
    console.log(p);         // HTMLCollection(2) [p, p]
},2000)
