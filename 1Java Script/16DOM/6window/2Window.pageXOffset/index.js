function onScrollFunction(){
    const p = document.getElementById('p')
    p.innerHTML = `
    window.pageXOffset = ${window.pageXOffset.toFixed()}`
}