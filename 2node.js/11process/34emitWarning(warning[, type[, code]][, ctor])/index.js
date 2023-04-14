/*
process.emitWarning(warning[, type[, code]][, ctor]) is a method in Node.js that allows you to emit a warning message from within your script. 
This method is an alternative form of process.emitWarning(warning[, options]) that has been deprecated.

The method takes four arguments:

    warning: This is the message you want to emit as a warning. It can be a string or an Error object.

    type: This is an optional argument that can be used to specify the type of warning. By default it is set to 'Warning'

    code: This is an optional argument that can be used to specify a code that identifies the warning. This can be useful for programmatic handling of warnings.

    ctor: This is an optional argument that can be used to specify a constructor for the error object. The error object will be an instance of this constructor.
*/

class MyWarning extends Error {
    constructor(message, code) {
      super(message);
      this.name = 'MyWarning';
      this.code = code;
    }
  }
  

process.emitWarning("This is a warning message", "MyWarning", "MY_WARNING", MyWarning);


/*
(node:21548) [MY_WARNING] MyWarning: This is a warning message
(Use `node --trace-warnings ...` to show where the warning was created)
*/

process.on('warning', (warning) => {
    console.warn(warning.name); // MyWarning
    console.warn(warning.message); // This is a warning message
    console.warn(warning.stack);    // MyWarning: This is a warning message
});