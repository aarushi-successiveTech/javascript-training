// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const object1 = {
    a: 1,
    b: { c: 2, d: [3, 4] }
}

function flattenObject(object1){
    let result = {} ; 

    for(const i in object1){
        if((typeof(object1[i])) === 'object' && object1[i] != null){

            const temp = flattenObject(object1[i]);
            for(const j in temp){
                result[i + '.' + j] = temp[j]; 
            }
        }
        else{
            result[i] = object1[i]; 
        }
    }
    return result ; 
}

console.log(flattenObject(object1));