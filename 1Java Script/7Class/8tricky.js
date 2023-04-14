// calling static variable and methods with this.constructor
console.log(`this.constructor`);
class ClassA{
  static staticField = 10

}
class ClassB extends ClassA{
  constructor() {
    super()
    this.instanceField = this.constructor.staticField
    this.instanceField2 = this.constructor.staticMethod()
  }
  static staticMethod(){
    return 'inside staticMethod'
  } 
}
c = new ClassB()
console.log(c.instanceField)        // 10
console.log(c.instanceField2)       // inside staticMethod



console.log(``);
// using same name
console.log(`using same name`);

class ClassC{
    static sameNameMethod(){
      console.log('inside sameNameMethod with static')
    }
}
class ClassD extends ClassC{
    sameNameMethod(){
        console.log('inside sameNameMethod without static')
    }
    
}
c = new ClassD()
c.sameNameMethod()                  // inside sameNameMethod without static
ClassC.sameNameMethod()             // inside sameNameMethod with static