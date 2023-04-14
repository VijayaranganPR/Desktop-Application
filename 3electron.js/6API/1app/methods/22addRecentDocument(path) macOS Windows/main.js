/*
The app.addRecentDocument method in Electron allows you to add a document to the list of recent documents in the operating system's "Recent Documents" or "Recently Used" list. 
This method is available on macOS and Windows.

Adds path to the recent documents list.

This list is managed by the OS. On Windows, you can visit the list from the task bar, and on macOS, you can visit it from dock menu.
*/

const { app } = require('electron');

app.on('ready', () => {
    app.addRecentDocument('document.txt');
    app.quit()
})

