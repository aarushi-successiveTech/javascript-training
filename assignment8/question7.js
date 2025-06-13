// 7. for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

// use of var is resulting in all outputs as 10 

// we have to use let to initialize variable
for (let i = 0; i < 10; i++) {
setTimeout(function() { console.log(i); }, 1000); }