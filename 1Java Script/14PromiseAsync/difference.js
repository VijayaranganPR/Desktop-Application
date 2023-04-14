// Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.
// An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

const p = new Promise((res, rej) => {
    res(1);
});

function basicReturn() {
    return Promise.resolve(p);
}

async function asyncReturn() {
    return p;
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false