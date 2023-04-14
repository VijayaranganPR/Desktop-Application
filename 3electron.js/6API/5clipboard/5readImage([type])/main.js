/*
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Returns NativeImage - The image content in the clipboard.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')


    // Load an image from a file
    const image = nativeImage.createFromPath('full.jpg')

    // Write the image to the clipboard
    clipboard.writeImage(image)


    // Read the image from the clipboard
    const readImageFile = clipboard.readImage()

    // Display the size of the image
    console.log(`Image size: ${readImageFile.getSize().width} x ${readImageFile.getSize().height}`)     // Image size: 200 x 200

}

app.whenReady().then(createWindow)
