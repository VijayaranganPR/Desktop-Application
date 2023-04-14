/*
Returns string - The type of the currently running activity.
*/
const {app} = require('electron');

app.on('ready', () => {
    console.log(app.getCurrentActivityType());
    app.quit()
})
