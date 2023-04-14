/*
Marks the current Handoff user activity as inactive without invalidating it.
*/
const {app} = require('electron');

app.on('ready', () => {
    console.log(app.resignCurrentActivity());
    app.quit()
})
