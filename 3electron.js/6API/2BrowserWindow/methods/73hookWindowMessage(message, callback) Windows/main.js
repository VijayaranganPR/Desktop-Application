/*
message Integer
callback Function
    wParam any - The wParam provided to the WndProc
    lParam any - The lParam provided to the WndProc
Hooks a windows message. The callback is called when the message is received in the WndProc.

win.hookWindowMessage(message, callback) is a method in the Electron framework that enables an application to intercept and handle Windows messages sent to a window.

Windows messages are a mechanism used by the Windows operating system to communicate information between different parts of a running application, or between different applications. 
They are identified by a numeric message code, and can be used to perform a wide variety of tasks, such as sending keyboard input, receiving mouse clicks, and responding to system events.

With win.hookWindowMessage(), you can intercept and handle specific Windows messages before they are processed by the window. 
The message argument specifies the Windows message code to intercept, and the callback argument is a function that is called when the specified message is received.


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