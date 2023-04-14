const info = document.getElementById('info')

// we can't use node js api's here we need to create a bridge to access it.
// const path = require('path')

/*
The solution for this problem is to use Electron's ipcMain and ipcRenderer modules for inter-process communication (IPC). 
To send a message from your web page to the main process, you can set up a main process handler with ipcMain.handle and then expose a function that calls ipcRenderer.invoke to trigger the handler in your preload script.
*/

info.textContent = `the version of chrome is v(${versions.chrome()}), node is v(${versions.node()}), and electron is v(${versions.electron()})`
