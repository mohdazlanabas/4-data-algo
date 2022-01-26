var startTime = performance.now() // TIMER DONT TOUCH

// BIG O: O(log n)

let n = (1000000 * 1000000)
console.log(n);

function logn(n) {
    while (n > 1) {
        n = Math.floor(n/2)
        }
    }

//BELOW TIMER DONT TOUCH
var endTime = performance.now() 
var num = (endTime - startTime)/1000 
let numShort = num.toFixed(4); 
console.log("This algorithm took " + numShort+ " seconds to execute. \n") 