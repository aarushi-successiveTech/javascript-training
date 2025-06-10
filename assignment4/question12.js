// Write a program to display intersection of two array

const arr1 = [1,2,3,4]
const arr2 = [2,3,4,5,6,7]

function finalArray(arr1 , arr2 ){
    return arr1.filter(element => arr2.includes(element));
}

console.log(finalArray(arr1, arr2));
