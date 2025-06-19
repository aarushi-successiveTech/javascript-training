//Write a program to reverse a string ("Hello John" => "olleH nhoJ")

let reversed ="";
function reversedString(str){
    
    for(let i=str.length-1; i >= 0 ; i--){
        reversed += str[i];
    }
    
    console.log(reversed); 
}
reversedString('Hello John');