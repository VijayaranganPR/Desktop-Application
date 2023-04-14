// Unconditional catch-block
console.log(`Unconditional catch-block`);

try {
    throw new Error('some error')
} catch (e) { // error object scope stop in catch block
    console.log(e) // Error: some error
}



console.log(``);
// Conditional catch-block
console.log(`Conditional catch-block`);

try {
    throw new EvalError('some eval error occured')
} catch (e) { // error object scope stop in catch block
    if (e instanceof RangeError) {
        console.log(e.name);
        console.log(e.message);
    } else if (e instanceof EvalError) {
        console.log(e.name)
        console.log(e.message);
    }
}

/*
Conditional catch-block
EvalError
some eval error occured
*/



console.log(``);
// The finally-block - use case
console.log(`The finally-block - use case`);

// openMyFile();
try {
    // writeMyFile(theData);
} finally {
    // closeMyFile(); // always close the resource
}



console.log(``);
// scope ends only at finally
console.log(`scope ends only at finally`);

function finallyReturn() {
    try {
        return 1
    } catch {
        return 2
    } finally {
        return 3
    }
}

console.log(finallyReturn()) // 3



console.log(``);
// returning from finally
console.log(`returning from finally`);

function finallyReturn2() {
    try {
        console.log('outer try')
        try {
            console.log(`inner try`);
            throw new Error('message for inner')
        } catch (e) {
            console.log('inner catch')
            throw e
        } finally {
            console.log('finally')
            return 'nothing'
        }
    } catch (e) { // this block won't be executed
        console.log('outer catch message: ', e.message)
    }
}

console.log(finallyReturn2())
/*
returning from finally
inner try
inner catch
finally
nothing
*/



console.log(``);
// Nested try-blocks
console.log(`Nested try-blocks`);

try {
    try {
        console.log(`inner try`);
        throw new Error('message for outer')
    } finally {
        console.log('finally')
    }
} catch (e) {
    console.log('outer catch message: ', e.message)
}
/*
Nested try-blocks
inner try
finally
outer catch message:  message for outer
*/


// including inner catch
console.log(``);
console.log(`including inner catch`);

try {
    try {
        console.log(`inner try`);
        throw new Error('message for outer')
    } catch (e) {
        console.log('inner catch')
    } finally {
        console.log('finally')
    }
} catch (e) { // this block won't be executed
    console.log('outer catch message: ', e.message)
}

/*
including inner catch
inner try
inner catch
finally
*/



console.log(``);
// rethrowing the error
console.log(`rethrowing the error`);

try {
    try {
        console.log(`inner try`);
        throw new Error('message for outer')
    } catch (e) {
        console.log('inner catch')
        throw e
    } finally {
        console.log('finally')
    }
} catch (e) {
    console.log('outer catch message: ', e.message)
}

/*
rethrowing the error
inner try
inner catch
finally
outer catch message:  message for outer
*/