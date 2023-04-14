const { ipcRenderer } = require("electron");

window.send = (channel, message) => ipcRenderer.send(channel, message)

window.one = 1
window.two = 2
globalVariable = 10;
