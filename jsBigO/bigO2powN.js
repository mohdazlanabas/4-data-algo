var startTime = performance.now() // TIMER DONT TOUCH

// BIG O: O(log n)

let n = (1000000 * 1000000)
console.log(n);

function fib(n) {
    if (n === 0) {
    return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);

}

//BELOW TIMER DONT TOUCH
var endTime = performance.now() 
var num = (endTime - startTime)/1000 
let numShort = num.toFixed(4); 
console.log("This algorithm took " + numShort+ " seconds to execute. \n") 