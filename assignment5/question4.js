// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const user = {
    name : "Aarushi", 
    age : 21 ,
    hobbies : "reading",
    address : {
        state : "Noida" , 
        sector : 126,
     } , 
    date : new Date(),
}

const newUser = structuredClone(user) ; 

newUser.name = "Eklavya" ; 
newUser.age = 28 ; 
newUser.hobbies = "basketball" ;
newUser.address.sector = 147 ; 
newUser.date = 2024; 

console.log(user);
console.log(newUser); 
