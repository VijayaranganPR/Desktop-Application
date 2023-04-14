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
ad = new Address()
console.log('this message is inside Class.js, but will print when you call')
module.exports = {Address}
