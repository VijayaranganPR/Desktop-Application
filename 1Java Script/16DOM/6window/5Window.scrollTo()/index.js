const p = document.getElementById('p')
setInterval(() => {
    p.innerHTML = `
    window.pageXOffset = ${window.pageXOffset.toFixed()}
    <br>
    window.pageYOffset = ${window.pageYOffset.toFixed()}`
},1)

const button = document.getElementById('button')
button.addEventListener('click',() =>{window.scrollTo(1000,1000)})
