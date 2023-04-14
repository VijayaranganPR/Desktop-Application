window.addEventListener('click',(e) => {
    let x = e.clientX;
    let y = e.clientY;
    const ele = document.elementFromPoint(x,y)
    ele.style.backgroundColor = 'red'
})