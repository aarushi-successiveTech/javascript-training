// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape{
    constructor(width , height){
        this.width = width ;
        this.height = height ; 
    }

    getArea(width , height){
        return this.width * this.height; 
    }

}

class Rectangle extends Shape{
    
    showArea(){
        return `Area of rectangle : ${this.getArea()}`;
    }
}

const rect1 = new Rectangle(10 , 20); 
console.log(rect1.showArea());

class Triangle extends Shape{
    getArea(){
        return (this.width * this.height)/2 ;
    }
    showArea(){
        return `Area of Triangle : ${this.getArea()}`;
    }
}

const traingle1 = new Triangle(10,20);
console.log(traingle1.showArea());
