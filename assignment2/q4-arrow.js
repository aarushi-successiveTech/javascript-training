const readline = require('readline'); 

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}); 

rl.question("Enter a number : ", input => {
    const num = Number(input);
    const square = num * num ;
    console.log(`Square of ${num} is ${square}`);
    rl.close();
});