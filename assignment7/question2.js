// Give an example of using multiple callback functions in a single function in JavaScript

function performOperations(a, b, callSum, callProduct){
    const sum = a + b ; 
    const product = a * b ; 

    callSum(sum) ;
    callProduct(product) ;
}

function printSum(sum){
    console.log("sum is ", sum);
}

function printProduct(product){
    console.log("product is :", product); 
}

performOperations(2, 3, printSum, printProduct); 