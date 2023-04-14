/*
Returns boolean - Whether the current desktop environment is Unity launcher.


*/
const { app } = require('electron');

if (app.isUnityRunning()) {
  console.log('Unity is running');
} else {
  console.log('Unity is not running');
}
