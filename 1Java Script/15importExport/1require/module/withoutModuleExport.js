a = 10
add = (a,b) => a+b
sub = (a,b) => a-b
b = 20
mul = (a,b) => a*b
div = (a,b) => a/b

class Address{
    constructor(){
        this.name = 'Vijayarangan'
        this.age = 21
        this.insidePrint = () => console.log('I am printing inside constructor: my name is '+ this.name+', my age is '+this.age)
    }
    print(){
        console.log('I am printing as method in class: my name is '+ this.name+', my age is '+this.age)
    }
}
objectForAddressInsideWithoutModuleExport = new Address()
console.log('this message is inside WithoutModuleExport.js, but will print when you call')