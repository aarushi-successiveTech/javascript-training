// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    fullname(){
        console.log(`FullName : ${this.firstName} ${this.lastName}`);
    }

    static averageAge(personArray){
        if(personArray.length == 0){
            return 0 ;
        }
        
        let sum = 0 ;
        for(let i of personArray){
            sum += i.age; 
        }
        const averageSum = sum / personArray.length; 
        return averageSum; 

    }
}

const person1 = new Person('Aarushi', 'Mahajan', 21);
const person2 = new Person('Japleen', 'Sachdev', 23);
const person3 = new Person('Khushi', 'Singh', 22);

const allPeople = [person1, person2, person3];

const avg = Person.averageAge(allPeople);
console.log(avg);
