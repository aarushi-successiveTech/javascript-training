// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const user = [
    {name : 'Aarushi' , age : 21} , 
    {name : 'Eklavya' , age : 28} ,
    {name : 'Aayushi' , age : 23} , 
    {name : 'Japleen' , age : 22} , 
]

user.sort((a ,b) => a.age - b.age); 
console.log(user);
