const {ipcRenderer} = require('electron')


document.getElementById('buttonSecond').addEventListener('click', () => {
    const textBox = document.getElementById('second')
    const message = textBox.value
    textBox.value = ''
    ipcRenderer.send('fromSecond', message)
})

ipcRenderer.on('fromFirst', (event, message) => {
    document.getElementById('ul').innerHTML += `<li>${message}</li>`
})
