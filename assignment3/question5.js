function printEven(number){
    const evenNumber = []; 
    const oddNumber = []; 

    for(let i = 0 ; i < number.length ; i++){
        if(number[i] % 2 == 0){
            evenNumber.push(number[i]);
        }
        else{
            oddNumber.push(number[i]);
        }
    }
    const result = evenNumber.concat(oddNumber);
    console.log(result)
}
const number = [1,2,3,4,5,6,7]
printEven(number);