// Write a program to iterate over object.

const obj = {
    name : "Aarushi", 
    class : "12th",
    interest : "Guitar"
}

for(let i in obj ){
    console.log(i , obj[i]);
}