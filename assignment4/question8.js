// Write a program to remove dupliacte elements from an array

const arr = [1,2,3,4,5,2,6,3];

let s = new Set(arr); 
let uniqueArray = [...s];
console.log(uniqueArray);
