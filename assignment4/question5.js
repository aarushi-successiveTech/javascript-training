// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)


function convertToCamel(str){
    let result = []; 
    let flag = false; 

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == ' '){
            flag = true;
        }
        else if(flag == true ){
            result.push(str[i].toUpperCase());

            flag = false ; 
        }
        else{
            result.push(str[i])
        }
    }
    return result.join('');

}
let str = 'hello john doe'
console.log(convertToCamel(str));