function getPattern(row){
    let num = 1; 
    let pattern = ''; 

    for(let i = 1 ; i <= row ; i++){
        for(let j = 1 ; j <= i ; j++){
            pattern += num + ' '; 
            num ++;
        }
        pattern += '\n';

    }

    return pattern ; 
}

console.log(getPattern(4));