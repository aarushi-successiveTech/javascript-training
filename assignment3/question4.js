function printEven(number){
    for(let i = 0; i <= number ; i++){
        if(i % 2 == 0 ){
            console.log(i)
        }
    }

    for(let j = 0 ; j <= number ; j++){
        if(j %2 != 0 ){
            console.log(j)
        }
    }
}
printEven(10);