/*
A BrowserWindow's preload script runs in a context that has access to both the HTML DOM and a limited subset of Node.js and Electron APIs.

Preload scripts are injected before a web page loads in the renderer, similar to a Chrome extension's content scripts. 
To add features to your renderer that require privileged access, you can define global objects through the contextBridge API.
*/

const {app, BrowserWindow} = require('electron')
const path = require('path')

createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./index.html')
}
console.log(globalThis)
app.on('ready',() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0)
        createWindow();
    })
})



app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit()
})
