// "available".do else undefine

vijay = {name:'Vijayarangan',
    school:{tenth:2016,
    twelfth:2},
    work(){
        return "person is coding"
    }}

console.log(vijay?.age)  // undefined

console.log(vijay?.name)  // Vijayarangan

console.log(vijay?.school?.college)  // undefined

console.log(vijay?.school?.tenth)  // 2016

// console.log(vijay.whatdoing())  // error

console.log(vijay.whatdoing?.()) // undefined

console.log(vijay.work?.())  // person is coding

// alternative

console.log(vijay?.school?.college ?? 2018)  // 2018