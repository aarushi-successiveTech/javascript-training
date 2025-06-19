// 4.let myString = 'hello world';
// if (myString.length > 0) {
//     console.log('The length of the string is: ' + myString.length);
// } else {
//     console.log('The string is empty');
// }

// let myNumber = parseInt(myString);
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The value is not a number');
// }

// The error is in if statement , it will return false even if the string contains 0 

// correct code is : 

let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString);
if (!Number.isNaN(myNumber)) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}