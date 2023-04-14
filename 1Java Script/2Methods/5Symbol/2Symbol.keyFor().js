// The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.

const globalSym = Symbol.for('foo'); // global symbol

console.log(Symbol.keyFor(globalSym));
// expected output: "foo"

const localSym = Symbol(); // local symbol

console.log(Symbol.keyFor(localSym));
// expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// expected output: undefined