/*
browserWindow BrowserWindow (optional)
options Object
title string (optional)
defaultPath string (optional)
buttonLabel string (optional) - Custom label for the confirmation button, when left empty the default label will be used.
filters FileFilter[] (optional)
properties string[] (optional) - Contains which features the dialog should use. The following values are supported:
openFile - Allow files to be selected.
openDirectory - Allow directories to be selected.
multiSelections - Allow multiple paths to be selected.
showHiddenFiles - Show hidden files in dialog.
createDirectory macOS - Allow creating new directories from dialog.
promptToCreate Windows - Prompt for creation if the file path entered in the dialog does not exist. This does not actually create the file at the path but allows non-existent paths to be returned that should be created by the application.
noResolveAliases macOS - Disable the automatic alias (symlink) path resolution. Selected aliases will now return the alias path instead of their target path.
treatPackageAsDirectory macOS - Treat packages, such as .app folders, as a directory instead of a file.
dontAddToRecent Windows - Do not add the item being opened to the recent documents list.
message string (optional) macOS - Message to display above input boxes.
securityScopedBookmarks boolean (optional) macOS mas - Create security scoped bookmarks when packaged for the Mac App Store.
Returns string[] | undefined, the file paths chosen by the user; if the dialog is cancelled it returns undefined.

The browserWindow argument allows the dialog to attach itself to a parent window, making it modal.

The filters specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type. For example:


*/

const {app,BrowserWindow,dialog} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    dialog.showOpenDialogSync(win, {
        properties: ['openFile', 'openDirectory']
    })
}

app.whenReady().then(createWindow)
