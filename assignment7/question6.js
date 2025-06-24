// Implement a function that returns a resolved Promise after a specified delay using async/await.

function wait(ms){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("message passed!");
        }, ms);
    })
}

async function run(){
    console.log("waiting"); 
    const message = await wait(2000); 
    console.log(message); 

}; 

run(); 