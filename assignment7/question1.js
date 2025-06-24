// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function getUserData(callback){
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => response.json())
    .then(data => callback(null , data))
    .catch(error => callback(error , null))
}; 

getUserData(function (error , data){
    if(error){
        console.log(error); 
    }
    else{
        console.log(data.name); 

    }
})