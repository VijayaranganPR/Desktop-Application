function onScrollFunction(){
    window.scrollBy(100,100)
    const p = document.getElementById('p')
    p.innerHTML = `
    window.pageXOffset = ${window.pageXOffset.toFixed()}
    <br>
    window.pageYOffset = ${window.pageYOffset.toFixed()}`
}

const button = document.getElementById('button')
button.addEventListener('click',onScrollFunction)
