/*
channel string
message any
transfer MessagePortMain[] (optional)
Send a message to the renderer process, optionally transferring ownership of zero or more MessagePortMain objects.

The transferred MessagePortMain objects will be available in the renderer process by accessing the ports property of the emitted event. 
When they arrive in the renderer, they will be native DOM MessagePort objects.
*/
const {app,BrowserWindow, ipcMain, MessageChannelMain} = require('electron')

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
    
    const {port1, port2} = new MessageChannelMain()
    win.webContents.postMessage('from_main', 'message from main', [port1])
    
}

app.whenReady().then(createWindow)


/* 
// in terminal
message from renderer : frameID is 1

// in browser terminal
message from main
*/
