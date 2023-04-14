const { ipcRenderer } = require("electron");

ipcRenderer.on('from_main', (e, message) => {
    console.log(message, e.ports)
})
ipcRenderer.send('from_renderer', 'message from renderer')
