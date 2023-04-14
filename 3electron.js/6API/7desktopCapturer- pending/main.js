/*
options Object
types string[] - An array of strings that lists the types of desktop sources to be captured, available types are screen and window.
thumbnailSize Size (optional) - The size that the media source thumbnail should be scaled to. Default is 150 x 150. Set width or height to 0 when you do not need the thumbnails. This will save the processing time required for capturing the content of each window and screen.
fetchWindowIcons boolean (optional) - Set to true to enable fetching window icons. The default value is false. When false the appIcon property of the sources return null. Same if a source has the type screen.
Returns Promise<DesktopCapturerSource[]> - Resolves with an array of DesktopCapturerSource objects, each DesktopCapturerSource represents a screen or an individual window that can be captured.

Note Capturing the screen contents requires user consent on macOS 10.15 Catalina or higher, which can detected by systemPreferences.getMediaAccessStatus.

*/

const {app,BrowserWindow,desktopCapturer} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        for (const source of sources) {
          if (source.name === 'Electron') {
            mainWindow.webContents.send('SET_SOURCE', source.id)
            return
          }
        }
    })

}

app.whenReady().then(createWindow)
