function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    console.trace('traced');
}

functionA();
/*
traced
functionC @ index.js:10
functionB @ index.js:6
functionA @ index.js:2
(anonymous) @ index.js:13
*/