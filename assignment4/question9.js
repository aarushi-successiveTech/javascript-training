// Write a program to find the last duplicate index in an array

const arr = [1,2,3,4,5,2,6,3]
let lastIndex = -1; 
function findIndex(arr){
    for(let i = 0 ; i < arr.length ; i++){
        const firstIndex = arr.indexOf(arr[i]);
        if(firstIndex != -1 && firstIndex != i){
            lastIndex = i 
        }
        

    }

    console.log(lastIndex);
}

findIndex(arr);
