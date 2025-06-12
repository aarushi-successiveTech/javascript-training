// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person{
    constructor(name , age , gender , interest){
        this.name = name ,
        this.age = age , 
        this.gender = gender , 
        this.interest = interest 
    }

    greeting(){
        console.log(`this.name}, a ${this.age} years old ${this.gender} interested in ${this.interest}.`);
    }

    farewell(){
        console.log(`Goodbye ${this.name}`);

    }
}

class Student extends Person{

    constructor(name, age, gender, interest, subject){

        super(name, age, gender, interest);
        this.subject = subject
    }

    greeting() {
        console.log(`Hi, I am ${this.name}, a ${this.age} years old ${this.gender} interested in ${this.interest}.I am majoring in ${this.subject}.`);
    }
}

class Teacher extends Person{

    constructor(name, subjectTaught){
        super(name); 
        this.subjectTaught = subjectTaught;

    }

    farewell(){
        console.log(`Goodbye ${this.name}! subject taught ${this.subjectTaught}`);
    }
}

const student1 = new Person('Aarushi' , 21 , 'Female' , 'Reading');
student1.greeting();
student1.farewell();

const student2 = new Student('Aarushi' , 22 , 'Female' , 'Skating'); 
student2.greeting('Maths');

const teacher1 = new Teacher('Aarushi' ,'Physics');
teacher1.farewell();
