/*
Returns boolean - Whether the application is currently running from the systems Application folder. 
Use in combination with app.moveToApplicationsFolder()
*/

const { app } = require('electron');

// Check if the application is running from the Applications folder
if (app.isInApplicationsFolder()) {
  console.log('The application is running from the Applications folder');
} else {
  console.log('The application is not running from the Applications folder');
}
