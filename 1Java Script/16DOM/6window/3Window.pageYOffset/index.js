function onScrollFunction(){
    const p = document.getElementById('p')
    p.innerHTML = `
    window.pageYOffset = ${window.pageYOffset.toFixed()}`
}