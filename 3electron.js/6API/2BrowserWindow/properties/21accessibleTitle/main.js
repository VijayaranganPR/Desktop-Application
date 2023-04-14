/*
A string property that defines an alternative title provided only to accessibility tools such as screen readers. 
This string is not directly visible to users.


*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    console.log(win.accessibleTitle); // ''      
    win.accessibleTitle = 'hello'
    console.log(win.accessibleTitle); // 'hello'

}

app.whenReady().then(createWindow)