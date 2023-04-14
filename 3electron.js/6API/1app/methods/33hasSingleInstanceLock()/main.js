/*
app.hasSingleInstanceLock() is a method provided by the electron framework for building cross-platform desktop applications using web technologies. 
It's used to determine whether the current instance of the application has acquired a lock using app.requestSingleInstanceLock().

The method returns a Boolean value, true if the current instance of the application has the lock, and false if it does not.


Returns boolean

This method returns whether or not this instance of your app is currently holding the single instance lock. 
You can request the lock with app.requestSingleInstanceLock() and release with app.releaseSingleInstanceLock()
*/
const { app } = require('electron');

if (app.hasSingleInstanceLock()) {
  console.log('This instance of the application has the single instance lock.');
} else {
  console.log('This instance of the application does not have the single instance lock.');
}
/*
This instance of the application does not have the single instance lock.
*/