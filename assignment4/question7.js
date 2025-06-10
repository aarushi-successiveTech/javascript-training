// Write a program to find index of duplicate elements in an array

const arr = [1,2,3,4,6,2,5,3];

let duplicate = [];
for(let i in arr){
    for(let j in arr){
        if(i !== j && arr[i] == arr[j] && !duplicate.includes(arr[i])){
            duplicate.push(i)}
        
    }

}
console.log(duplicate)
