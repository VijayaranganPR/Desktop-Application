const path = require('path')
const {ipcRenderer} = require('electron')

ipcRenderer.send('channelName', path.join(__dirname, 'renderer.js'))


ipcRenderer.on('channelName', (event, message) => {
    document.getElementById('p').textContent = message
})
