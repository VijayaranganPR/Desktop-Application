/*
Changes the Application User Model ID to id.

*/

const {app} = require('electron');

app.on('ready', () => {
    app.setAppUserModelId('appID')
    app.quit()
})
