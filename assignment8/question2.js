// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// correct code : 

let myObject = { name: 'John', age: 30 };
for(let property in myObject) { // use of let to declare property variable
   console.log(property + ': ' + myObject[property]);  // accessed object property using [] method 
   
}