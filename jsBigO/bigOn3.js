var startTime = performance.now() // TIMER DONT TOUCH

// BIG O: O(n^3)

let n = (1000000 * 1000000)
console.log(n);

function square(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
            console.log(i,j,k); }
        }
    }
}

//BELOW TIMER DONT TOUCH
var endTime = performance.now() 
var num = (endTime - startTime)/1000 
let numShort = num.toFixed(4); 
console.log("This algorithm took " + numShort+ " seconds to execute. \n") 