const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getSum = () => {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      var sum = Number(num1) + Number(num2);
      console.log("Sum is: " + sum);
      rl.close();
    });
  });
}

getSum(); 