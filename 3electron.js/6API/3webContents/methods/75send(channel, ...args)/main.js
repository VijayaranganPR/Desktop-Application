/*
channel string
...args any[]
Send an asynchronous message to the renderer process via channel, along with arguments. Arguments will be serialized with the Structured Clone Algorithm, just like postMessage, so prototype chains will not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.

NOTE: Sending non-standard JavaScript types such as DOM objects or special Electron objects will throw an exception.

The renderer process can handle the message by listening to channel with the ipcRenderer module.
*/
const {app,BrowserWindow, ipcMain} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    ipcMain.on('from_renderer', (e, message) => {
        console.log(message)
    })
    
    win.webContents.send('from_main', 'message from main')
    
}

app.whenReady().then(createWindow)


/* 
// in terminal
message from renderer

// in browser terminal
message from main
*/
