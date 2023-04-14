/*
In Electron JS, offset refers to the number of bytes to navigate to, relative to the beginning of the web page.

When a web page is loaded in a BrowserWindow, it is loaded as a stream of bytes. Each byte has a unique position in the stream, starting from 0 at the beginning of the page. The offset parameter in methods such as contents.goToOffset(offset) and contents.canGoToOffset(offset) specifies the position in the byte stream to navigate to.

For example, if you want to navigate to the 500th byte in a web page, you would pass 500 as the offset parameter to the goToOffset(offset) method. Similarly, if you want to check if it is possible to navigate to a position 10 bytes ahead of the current position, you would pass currentOffset + 10 as the offset parameter to the canGoToOffset(offset) method.

Note that the byte offset of a specific point on a web page may not be immediately obvious, and may depend on various factors such as the encoding of the page and the structure of its content. In many cases, you may need to use other methods such as getElementById() or getBoundingClientRect() to locate a specific element on a page before you can determine its byte offset.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.goToOffset(1)
    }, 3000);
    
}
app.whenReady().then(createWindow)

