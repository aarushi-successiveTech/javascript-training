// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// The function getPersonDetails() is being called not in the context of object 

var person = { name: "John Doe", age: 30, getDetails: function() 
    { console.log(this.name + " is " + this.age + " years old"); } };
var getPersonDetails = person.getDetails.bind(person);
getPersonDetails();