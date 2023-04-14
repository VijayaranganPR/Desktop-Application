/*
url string
options Object (optional)
httpReferrer (string | Referrer) (optional) - An HTTP Referrer url.
userAgent string (optional) - A user agent originating the request.
extraHeaders string (optional) - Extra headers separated by "\n".
postData (UploadRawData | UploadFile)[] (optional)
baseURLForDataURL string (optional) - Base url (with trailing path separator) for files to be loaded by the data url. This is needed only if the specified url is a data url and needs to load other files.
Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load). A noop rejection handler is already attached, which avoids unhandled rejection errors.

Loads the url in the window. The url must contain the protocol prefix, e.g. the http:// or file://. If the load should bypass http cache then use the pragma header to achieve it.
*/


const { app, webContents, BrowserWindow } = require('electron')

const createWindow = () => {
    const options = { extraHeaders: 'pragma: no-cache\n' }
    const win = new BrowserWindow()
    win.webContents.loadURL('https://www.google.com/',options)
}

app.whenReady().then(createWindow)