/*
An IpcMain scoped to just IPC messages sent from this WebContents.

IPC messages sent with ipcRenderer.send, ipcRenderer.sendSync or ipcRenderer.postMessage will be delivered in the following order:

contents.on('ipc-message')
contents.mainFrame.on(channel)
contents.ipc.on(channel)
ipcMain.on(channel)
Handlers registered with invoke will be checked in the following order. The first one that is defined will be called, the rest will be ignored.

contents.mainFrame.handle(channel)
contents.handle(channel)
ipcMain.handle(channel)
A handler or event listener registered on the WebContents will receive IPC messages sent from any frame, including child frames. 
In most cases, only the main frame can send IPC messages. However, if the nodeIntegrationInSubFrames option is enabled, it is possible for child frames to send IPC messages also. 
In that case, handlers should check the senderFrame property of the IPC event to ensure that the message is coming from the expected frame. 
Alternatively, register handlers on the appropriate frame directly using the WebFrameMain.ipc interface.
*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    console.log(win.webContents.ipc)
}

app.whenReady().then(createWindow)

/*
IpcMainImpl {
  _events: [Object: null prototype] { error: [Function (anonymous)] },
  _eventsCount: 1,
  _maxListeners: undefined,
  _invokeHandlers: Map(0) {},
  handle: [Function (anonymous)],
  handleOnce: [Function (anonymous)],
  [Symbol(kCapture)]: false
}
*/
