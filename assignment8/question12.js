// 12. async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });

// the return value is not connected getData function or its promise 
// correct code is : 
function getData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1,2,3,4,5]); // using resolve to fulfill the promise
        },1000);
    });
}

getData().then(function(data){
    console.log(data); 

})