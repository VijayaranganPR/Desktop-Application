/*
options Object (optional)
conflictHandler Function<boolean> (optional) - A handler for potential conflict in move failure.
conflictType string - The type of move conflict encountered by the handler; can be exists or existsAndRunning, where exists means that an app of the same name is present in the Applications directory and existsAndRunning means both that it exists and that it's presently running.
Returns boolean - Whether the move was successful. Please note that if the move is successful, your application will quit and relaunch.

No confirmation dialog will be presented by default. If you wish to allow the user to confirm the operation, you may do so using the dialog API.

NOTE: This method throws errors if anything other than the user causes the move to fail. For instance if the user cancels the authorization dialog, this method returns false. If we fail to perform the copy, then this method will throw an error. The message in the error should be informative and tell you exactly what went wrong.

By default, if an app of the same name as the one being moved exists in the Applications directory and is not running, the existing app will be trashed and the active app moved into its place. If it is running, the preexisting running app will assume focus and the previously active app will quit itself. This behavior can be changed by providing the optional conflict handler, where the boolean returned by the handler determines whether or not the move conflict is resolved with default behavior. i.e. returning false will ensure no further action is taken, returning true will result in the default behavior and the method continuing.


*/