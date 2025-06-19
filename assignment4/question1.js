//Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function duplicateStrings(str){
    return [...new Set(str)].join('');
}

console.log(duplicateStrings("Hello Yellow"));
