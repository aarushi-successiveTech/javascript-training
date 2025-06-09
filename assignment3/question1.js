let nums1 = 10;
let nums2 = 5;
let operator = '/';
let result;

switch(operator){
    case '+':
        result = nums1 + nums2;
        console.log(`${nums1} ${operator} ${nums2} = ${result}`);
        break ; 

    case '-':
        result = nums1 - nums2;
        console.log(`${nums1} ${operator} ${nums2} = ${result}`);
        break ;

    case '*':
        result = nums1 * nums2;
        console.log(`${nums1} ${operator} ${nums2} = ${result}`);
        break ;

    case '/':
        result = nums1 / nums2;
        console.log(`${nums1} ${operator} ${nums2} = ${result}`);
        break ;
        
    default:
        console.log('Invalid Operator');
        break ;

    
}
