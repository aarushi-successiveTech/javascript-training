const readline = require('readline');

function getDetails() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter your name: ", function(name) {
    rl.question("Enter your age: ", function(age) {
      rl.question("Enter your phone number: ", function(phone) {
        console.log(`Name: ${name}, Age: ${age}, Phone No: ${phone}`);
        rl.close();
      });
    });
  });
}

getDetails();
