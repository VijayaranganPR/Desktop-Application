/*
aspectRatio Float - The aspect ratio to maintain for some portion of the content view.
extraSize Size (optional) macOS - The extra size not to be included while maintaining the aspect ratio.
This will make a window maintain an aspect ratio. The extra size allows a developer to have space, specified in pixels, not included within the aspect ratio calculations. This API already takes into account the difference between a window's size and its content size.

Consider a normal window with an HD video player and associated controls. Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls on the right edge and 50 pixels of controls below the player. In order to maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within the player itself we would call this function with arguments of 16/9 and { width: 40, height: 50 }. The second argument doesn't care where the extra width and height are within the content view--only that they exist. Sum any extra width and height areas you have within the overall content view.

The aspect ratio is not respected when window is resized programmatically with APIs like win.setSize.

To reset an aspect ratio, pass 0 as the aspectRatio value: win.setAspectRatio(0).

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setAspectRatio(3)
}

app.whenReady().then(createWindow)