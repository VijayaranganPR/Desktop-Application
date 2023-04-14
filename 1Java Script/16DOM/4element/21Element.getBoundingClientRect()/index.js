function change() {
    const div = document.getElementById('div')
    console.log(div)
    const rect = div.getBoundingClientRect()
    let p = document.getElementById('p')

    p.innerHTML = ''
    for (let i in rect) {
        if (typeof rect[i] !== 'function') {
            p.innerHTML += `
            <br>
            ${i}: ${rect[i]}`
        }
    }
}

document.addEventListener('scroll', change)
