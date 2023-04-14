/*
url string
options Object (optional)
httpReferrer (string | Referrer) (optional) - An HTTP Referrer URL.
userAgent string (optional) - A user agent originating the request.
extraHeaders string (optional) - Extra headers separated by "\n"
postData (UploadRawData | UploadFile)[] (optional)
baseURLForDataURL string (optional) - Base URL (with trailing path separator) for files to be loaded by the data URL. This is needed only if the specified url is a data URL and needs to load other files.
Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load).

Same as webContents.loadURL(url[, options]).

The url can be a remote address (e.g. http://) or a path to a local HTML file using the file:// protocol.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
}

app.whenReady().then(createWindow)
