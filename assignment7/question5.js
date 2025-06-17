// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const { reject } = require("lodash");

class TaskQueue{
    constructor (concurrency){
        this.concurrency = concurrency;
        this.activeCount = 0 ; 
        this.queue = []; 
    }

    add(task){
        return new Promise((resolve , reject) => {
            const runTask = async () => {
                try{
                    this.activeCount++; 
                    const result = await task();
                    resolve(result); 
                }
                catch(err){
                    reject(err);
                }
                finally {
                    this.activeCount--;
                    this._next(); 
                }
            }; 
            if (this.activeCount < this.concurrency) {
            runTask(); 
        } else {
            this.queue.push(runTask); 
        }
        }); 

    }
    _next (){
        if(this.queue.length > 0 && this.activeCount < this.concurrency){
            const nextTask = this.queue.shift(); 
            nextTask(); 
        }
    }
}

function createTask(id, delay) {
  return () =>
    new Promise((resolve) => {
      console.log(`Start Task ${id}`);
      setTimeout(() => {
        console.log(`Finished Task ${id}`);
        resolve(`Result ${id}`);
      }, delay);
    });
}
const queue = new TaskQueue(2);
const tasks = [
  createTask(1, 1000),
  createTask(2, 800),
  createTask(3, 1200),
  
];

(async () => {
  const results = await Promise.all(tasks.map((task) => queue.add(task)));
  console.log("All tasks completed:", results);
})();