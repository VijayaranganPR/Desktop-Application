window.addEventListener('click',() =>{
    const p = document.getElementById('p')
    p.innerHTML = `
    clientX = ${event.clientX}, clientY = ${event.clientY}
    <br>
    pageX = ${event.pageX}, pageY = ${event.pageY}`
})