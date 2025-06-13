// Install the lodash package using npm install lodash. and use any of its function

// we will use flatten function that will help to flatten the array 

const flatten = require('lodash.flatten');

const myarray = [1,2,[3,4],[5,6],7];

const flattenedArray = flatten(myarray);
console.log(flattenedArray);
