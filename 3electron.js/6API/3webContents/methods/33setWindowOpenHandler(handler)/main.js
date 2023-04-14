/*
still pending

handler Function<{action: 'deny'} | {action: 'allow', outlivesOpener?: boolean, overrideBrowserWindowOptions?: BrowserWindowConstructorOptions}>

details Object
url string - The resolved version of the URL passed to window.open(). e.g. opening a window with window.open('foo') will yield something like https://the-origin/the/current/path/foo.
frameName string - Name of the window provided in window.open()
features string - Comma separated list of window features provided to window.open().
disposition string - Can be default, foreground-tab, background-tab, new-window, save-to-disk or other.
referrer Referrer - The referrer that will be passed to the new window. May or may not result in the Referer header being sent, depending on the referrer policy.
postBody PostBody (optional) - The post data that will be sent to the new window, along with the appropriate headers that will be set. If no post data is to be sent, the value will be null. Only defined when the window is being created by a form that set target=_blank.
Returns {action: 'deny'} | {action: 'allow', outlivesOpener?: boolean, overrideBrowserWindowOptions?: BrowserWindowConstructorOptions} - deny cancels the creation of the new window. allow will allow the new window to be created. Specifying overrideBrowserWindowOptions allows customization of the created window. By default, child windows are closed when their opener is closed. This can be changed by specifying outlivesOpener: true, in which case the opened window will not be closed when its opener is closed. Returning an unrecognized value such as a null, undefined, or an object without a recognized 'action' value will result in a console error and have the same effect as returning {action: 'deny'}.

Called before creating a window a new window is requested by the renderer, e.g. by window.open(), a link with target="_blank", shift+clicking on a link, or submitting a form with <form target="_blank">. See window.open() for more details and how to use this in conjunction with did-create-window.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.setWindowOpenHandler('')
}

app.whenReady().then(createWindow)
