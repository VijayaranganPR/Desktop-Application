console.log(``);
// as object property
console.log(`as object property`);
obj = {
    *objectProperty(){
        for(let i = 0; i<10; i++){
            if(i === 3){
                return i
            }
            yield i
        }
    }
}

iter = obj.objectProperty()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/



console.log(``);
// as class method
console.log(`as class method`);

class ClassMethod{
    *objectMethod(){
        for(i = 0; i<10; i++){
            if(i === 3){
                return i
            }
            yield i
        }
    }
}

o = new ClassMethod()
iter = o.objectMethod()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
as class method
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/



console.log(``);
// as computed property in object
console.log(`as computed property in object`);

computedProperty = {
    *[Symbol.iterator](){
        for(i = 0; i<10; i++){
            if(i === 3){
                return i
            }
            yield i
        }
    }
}

console.log(Array.from(computedProperty))        // [ 0, 1, 2 ]



console.log(``);
// as computed property in class
console.log(`as computed property in class`);

class ComputedMethod{
    *[Symbol.iterator](){
        for(i = 0; i<10; i++){
            if(i === 3){
                return i
            }
            yield i
        }
    }
}

console.log(Array.from(new ComputedMethod()))       // [ 0, 1, 2 ]



console.log(``);
// Generators are not constructable
console.log(`Generators are not constructable`);

function* notConstructable(){}

iter = notConstructable()
console.log(iter.next())
// { value: undefined, done: true }



console.log(``);
// an expression
console.log(`an expression`);

anExpression = function*(){
    for(i = 0; i<10; i++){
        if(i === 3){
            return i
        }
        yield i
    }
}

iter = anExpression()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/