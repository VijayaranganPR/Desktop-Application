// a Promise will be resolved only all promises inside it resoled.

// Example
promise1 = new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000, 'resolved');
    })
  );
});
promise1.then((x) => console.log(x))
// exection will be done in 1 sec
// resolved



