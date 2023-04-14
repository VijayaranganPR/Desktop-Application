/*
message Integer
Returns boolean - true or false depending on whether the message is hooked.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    win.hookWindowMessage(0x0112, (wParam, lParam) => {
        console.log(`WM_SYSCOMMAND received - wParam: ${wParam}, lParam: ${lParam}`)
    })
    console.log(win.isWindowMessageHooked(0x0112));         // true
}

app.whenReady().then(createWindow)