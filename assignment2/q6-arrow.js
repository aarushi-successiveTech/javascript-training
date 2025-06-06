const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isEven = function(num) {
  return num % 2 === 0;
};

rl.question("Enter a number: ", function(input) {
  const number = Number(input);
  const result = isEven(number);
  console.log(result);
  rl.close();
});
