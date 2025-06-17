// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

function fetchData(task, delay){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${task} completed at ${delay}ms`); 
        }, delay); 

    })
}

async function callfetch(){
    const task1 = fetchData("task1", 3000); 
    const task2 = fetchData("task2" , 1000); 
    const task3 = fetchData("task3" , 2000); 

    const result = await Promise.all([task1 , task2, task3]); 

    return result ;  
}

callfetch()
.then(result => {
    console.log("All tasks completed!"); 
    console.log(result); 

})