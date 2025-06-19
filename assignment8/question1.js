// Find Error in below questions and rectify them
// 1. let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

// The error is in the for loop , 
// which will result in out of bound iteration 

// correct code 

let myArray = [1,2,3,4]; 
for(let i = 0 ; i < myArray.length ; i++){
    console.log(myArray[i]); 
}