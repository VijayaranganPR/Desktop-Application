/*
url string - Max 2081 characters on windows.
options Object (optional)
activate boolean (optional) macOS - true to bring the opened application to the foreground. The default is true.
workingDirectory string (optional) Windows - The working directory.
Returns Promise<void>

Open the given external protocol URL in the desktop's default manner. (For example, mailto: URLs in the user's default mail agent).
*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    shell.openExternal('https://github.com')

}

app.whenReady().then(createWindow)
