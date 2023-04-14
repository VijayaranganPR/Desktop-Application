/*
The app.clearRecentDocuments method in Electron allows you to clear the list of recent documents in the operating system's "Recent Documents" or "Recently Used" list. 
This method is available on macOS and Windows.


*/
const { app } = require('electron');

app.on('ready', () => {
    app.addRecentDocument('document.txt')
    app.clearRecentDocuments()
    app.quit()
})
