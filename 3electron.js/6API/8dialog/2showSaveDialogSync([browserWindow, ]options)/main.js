/*
browserWindow BrowserWindow (optional)
options Object
title string (optional) - The dialog title. Cannot be displayed on some Linux desktop environments.
defaultPath string (optional) - Absolute directory path, absolute file path, or file name to use by default.
buttonLabel string (optional) - Custom label for the confirmation button, when left empty the default label will be used.
filters FileFilter[] (optional)
message string (optional) macOS - Message to display above text fields.
nameFieldLabel string (optional) macOS - Custom label for the text displayed in front of the filename text field.
showsTagField boolean (optional) macOS - Show the tags input box, defaults to true.
properties string[] (optional)
showHiddenFiles - Show hidden files in dialog.
createDirectory macOS - Allow creating new directories from dialog.
treatPackageAsDirectory macOS - Treat packages, such as .app folders, as a directory instead of a file.
showOverwriteConfirmation Linux - Sets whether the user will be presented a confirmation dialog if the user types a file name that already exists.
dontAddToRecent Windows - Do not add the item being saved to the recent documents list.
securityScopedBookmarks boolean (optional) macOS mas - Create a security scoped bookmark when packaged for the Mac App Store. If this option is enabled and the file doesn't already exist a blank file will be created at the chosen path.
Returns string | undefined, the path of the file chosen by the user; if the dialog is cancelled it returns undefined.

The browserWindow argument allows the dialog to attach itself to a parent window, making it modal.

The filters specifies an array of file types that can be displayed, see dialog.showOpenDialog for an example.

*/

const {app,BrowserWindow,dialog} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    dialog.showSaveDialogSync(win, {
        properties: ['showHiddenFiles']
    })
}

app.whenReady().then(createWindow)
