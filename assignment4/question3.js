// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countVariables(str) {
  const counts = new Map();

  for (const char of str){
    const currentCount = counts.get(char) || 0;
    counts.set(char, currentCount + 1);
  }

  let resultString = '';
  for (const [char, count] of counts){
    resultString += char + count;
  }

  return resultString;
}

const inputString = "abcabcdabbcc";
const result = countVariables(inputString);

console.log(`"${inputString}"`);  
console.log(`"${result}"`);      