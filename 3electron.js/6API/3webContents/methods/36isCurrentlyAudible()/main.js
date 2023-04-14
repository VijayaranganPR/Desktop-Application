/*
Returns boolean - Whether audio is currently playing.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    const content = win.webContents

    setTimeout(() => {
        win.loadURL('https://www.youtube.com/watch?v=X1HOCvfPmQg')
    }, 3000);


    content.on('did-finish-load', () => {
        setTimeout(() => {
            console.log(content.isCurrentlyAudible()) 
        }, 1000);
    })

}

app.whenReady().then(createWindow)
/*
// true
*/