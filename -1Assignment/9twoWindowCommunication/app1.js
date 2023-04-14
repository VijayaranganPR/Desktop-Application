const {ipcRenderer} = require('electron')


document.getElementById('buttonFirst').addEventListener('click', () => {
    const textBox = document.getElementById('first')
    const message = textBox.value
    textBox.value = ''
    ipcRenderer.send('fromFirst', message)
})

ipcRenderer.on('fromSecond', (event, message) => {
    document.getElementById('ul').innerHTML += `<li>${message}</li>`
})
