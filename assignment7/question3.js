//  Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchDataPromise(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("data fetched successfully");
        }, 1000); 
    })
}

fetchDataPromise()
.then(data => {
    console.log("data:", data); 
})
.catch(error =>{
    console.log("error: ", error); 
})
