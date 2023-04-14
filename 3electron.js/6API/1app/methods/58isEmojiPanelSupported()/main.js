/*
Returns boolean - whether or not the current OS version allows for native emoji pickers.
*/
const { app } = require('electron');

console.log(app.isEmojiPanelSupported());           // true

app.quit()
