// 9.function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

// the object has not been initialized using 'new' keyword so we could no access it 

// correct code is : 

function Person(name, age) { this.name = name; this.age = age; }
let person = new Person("John Doe", 30);
console.log(person.name);