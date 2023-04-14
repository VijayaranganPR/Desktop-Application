// static block can only have access to the static variables because it's executed before constructor

class ClassA{
  
    static returnedStaticMethodA = console.log(this.staticMethodA())
    returnedMethodA = console.log(this.methodA())
  
    static first = console.log('ClassA static field')
    second = console.log('ClassA instance field')
    
    static staticMethodA(){
      return 'ClassA static method'
    }
    methodA(){
      return 'ClassA instance Method'
    }
  
    constructor() {
        console.log('classA constructor')
    }
    static{
        console.log('classA static block')
    }
  }
  class ClassB extends ClassA{

    static returnedStaticMethodB = console.log(this.staticMethodB())
    returnedMethodB = console.log(this.methodB())

    static first = console.log('ClassB static field')
    second = console.log('ClassB instance field')

    static staticMethodB(){
      return 'ClassB static method'
    }
    methodB(){
      return 'ClassB instance Method'
    }
    
    constructor(){
        super()
        console.log('ClassB constructor')
    }
    static{
        console.log('ClassB static block')
    }
  }
  c = new ClassB()
  
  /*
  ClassA static method
  ClassA static field
  classA static block
  ClassB static method
  ClassB static field
  ClassB static block
  ClassA instance Method
  ClassA instance field
  classA constructor
  ClassB instance Method
  ClassB instance field
  ClassB constructor
  */
  
  
  
  console.log(``);
  // creating same name variable inside and outside class
  console.log(`creating same name variable inside and outside class`);
  
  var y = 'Outer y';
  
  class A {
  static field = 'Inner y';
  static {
    let y = this.field;
  }
  }
  console.log(y)
  console.log(A.y)
  /*
  creating same name variable inside and outside class
  Outer y
  undefined
  */
  
  
  
  console.log(``);
  // using if else
  console.log(`using if else`);
  
  class ClassC{
    // static vijay = 'vijay'
    constructor(vijay){
        this.vijay = vijay
    }
    static{
        if (this.vijay == 'vijay'){
            console.log('Hi Vijayarangan')
        }
        else{
            console.log('Hi someone')
        }
    }
  }
  
  c = new ClassC('vijay')
  console.log(c.vijay)
  
  /*
  using try catch
  Hi someone
  vijay
  */
  
  
  
  console.log(``);
  // using try catch
  console.log(`using try catch`);
  
  class ClassD{
    static a = 10;
    static b = 0;
    constructor(){
    }
    static{
        try {
            c = ClassD.a/ClassD.b
            if (c === Infinity) throw "too high"
            console.log(c)
        }
        catch{
            console.log('Zero devision error')
        }
    }
  }
  
  new ClassD()
  /*
  using try catch
  Zero devision error
  */