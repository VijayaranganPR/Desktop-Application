/*
Returns Integer - The current value displayed in the counter badge.
*/

const {app} = require('electron');
app.setBadgeCount(5)
console.log(app.getBadgeCount());
app.quit()
