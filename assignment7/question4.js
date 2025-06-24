// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter {
    constructor(limit){
        this.limit = limit ; 
        this.activeCount = 0 ; 
        this.queue = []; 
    }

    async run(fn){
        return new Promise((resolve , reject) =>{
            const task = async() =>{
                try {
                    this.activeCount++ ; 
                    const result = await fn(); 
                    resolve(result); 
                }
                catch(err){
                    reject(err); 
                }
                finally{
                    this.activeCount--;
                    this.next();
                }
            };
            if(this.activeCount < this.limit){
                task(); 
            }
            else{
                this.queue.push(task); 
            }
        });
    }

    next(){
        if(this.queue.length > 0 && this.activeCount < this.limit){
            const nextTask = this.queue.shift();
            nextTask(); 
        }
    }
}


function apiCalls(id , delay){
    return () => 
        new Promise((resolve) =>{
            console.log(`starting request ${id}`); 

            setTimeout(() => {
                console.log(`Finishing request ${id}`); 
                resolve(`Result ${id}`);
            }, delay); 
        })
}
const limiter = new RateLimiter(2); 

const tasks = [
    apiCalls(1,1000), 
    apiCalls(2, 500),
    apiCalls(3, 2000),
]; 

(async () => {
  const results = await Promise.all(
    tasks.map((task) => limiter.run(task)));
  console.log("All done:", results);
})();