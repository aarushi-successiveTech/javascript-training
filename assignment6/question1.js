// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(owner , balance){
        this.owner = owner ; 
        this.balance = balance ; 
    }
    deposit(amount){
        this.balance += amount; 
        console.log(`${this.owner} has deposited ${amount}`);
        
    };

    withdraw(amount){
        this.balance -= amount; 
        console.log(`${this.owner} has withdrawn ${amount}`); 
        
    }

    displayBalance(){
        console.log(`The updated balance is ${this.balance}`)
    }

}

const user1 = new BankAccount("Aarushi" , 2000); 
user1.deposit(1000);
user1.displayBalance();

user1.withdraw(2000); 
user1.displayBalance();
