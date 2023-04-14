/*
pending 

Shows pop-up dictionary that searches the selected word on the page.
*/


const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.selectAll()

        win.webContents.showDefinitionForSelection()
    }, 5000);
}

app.whenReady().then(createWindow)
