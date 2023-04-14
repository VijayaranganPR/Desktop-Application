/*
text string - Content to be searched, must not be empty.
options Object (optional)
forward boolean (optional) - Whether to search forward or backward, defaults to true.
findNext boolean (optional) - Whether to begin a new text finding session with this request. Should be true for initial requests, and false for follow-up requests. Defaults to false.
matchCase boolean (optional) - Whether search should be case-sensitive, defaults to false.
Returns Integer - The request id used for the request.

Starts a request to find all matches for the text in the web page. The result of the request can be obtained by subscribing to found-in-page event.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    
    setTimeout(() => {
        win.webContents.findInPage('google')
    }, 3000);

    setTimeout(() => {
        win.webContents.stopFindInPage('clearSelection')
    }, 6000);
}

app.whenReady().then(createWindow)
