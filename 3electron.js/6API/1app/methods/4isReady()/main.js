/*
Returns boolean - true if Electron has finished initializing, false otherwise. See also app.whenReady().
*/

const { app } = require('electron')

if (app.isReady()) {
  // The application is ready
} else {
  // The application is not yet ready
}
/*
app is ready
*/