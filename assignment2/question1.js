let lastnumber = null ; 

function getRandomNumber(){
    let newnumber; 
    do {
        newnumber = Math.floor(Math.random()* 10) + 1;
    }
    while (newnumber === lastnumber); 

    lastnumber = newnumber; 

    return newnumber; 

}

console.log(getRandomNumber()); 
console.log(getRandomNumber()); 
