/*
frameId Integer | [number, number] - the ID of the frame to send to, or a pair of [processId, frameId] if the frame is in a different process to the main frame.
channel string
...args any[]
Send an asynchronous message to a specific frame in a renderer process via channel, along with arguments. Arguments will be serialized with the Structured Clone Algorithm, just like postMessage, so prototype chains will not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.

NOTE: Sending non-standard JavaScript types such as DOM objects or special Electron objects will throw an exception.

The renderer process can handle the message by listening to channel with the ipcRenderer module.

If you want to get the frameId of a given renderer context you should use the webFrame.routingId value. E.g.

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
        console.log(message,': frameId is ', e.frameId)
    })
    
    win.webContents.sendToFrame(1, 'from_main', 'message from main')
    
}

app.whenReady().then(createWindow)


/* 
// in terminal
message from renderer : frameID is 1

// in browser terminal
message from main
*/
