const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getSum() {
  rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {
      var sum = Number(num1) + Number(num2);
      console.log("Sum is: " + sum);
      rl.close();
    });
  });
}

getSum(); 