var startTime = performance.now() // TIMER DONT TOUCH

// BIG O: O(log n)

let n = (1000000 * 1000000)
console.log(n);

function f(n) {
    if (n ===0) {
        console.log("**********")
    retrun
    }
    for (let i = 0; i < n; i++) {
        f(n -1);
    }

}

//BELOW TIMER DONT TOUCH
var endTime = performance.now() 
var num = (endTime - startTime)/1000 
let numShort = num.toFixed(4); 
console.log("This algorithm took " + numShort+ " seconds to execute. \n") 