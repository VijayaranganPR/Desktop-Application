/*
Error.stackTraceLimit is a property of the Error object in JavaScript that sets the number of stack frames to include in the stack trace of an error object. 
By default, the value of Error.stackTraceLimit is 10, which means that the stack trace of an error will include 10 frames at most.

You can change the value of Error.stackTraceLimit to control the maximum number of frames included in the stack trace. 
*/
Error.stackTraceLimit = 3;

function a() {
  b();
}

function b() {
  c();
}

function c() {
  d();
}

function d() {
  const error = new Error("This is an error");
  throw error;
}

try {
  a();
} catch (error) {
  console.error(error.stack);
}

/*
for 3 stack trace
Error: This is an error
    at d (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:19:17)
    at c (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:15:3)
    at b (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:11:3)

original
Error: This is an error
    at d (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:19:17)
    at c (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:15:3)
    at b (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:11:3)
    at a (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:7:3)
    at Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.stackTraceLimit\index.js:24:3)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
*/