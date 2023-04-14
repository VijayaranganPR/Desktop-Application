/*
Invalidates the current Handoff user activity.
*/
const {app} = require('electron');

app.on('ready', () => {
    console.log(app.invalidateCurrentActivity());
    app.quit()
})

