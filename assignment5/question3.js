// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const user = [
    {name : "John" , age : 27 , id : 1 }
]

user.forEach(element => {
    delete element.id; 
})

console.log(user);


