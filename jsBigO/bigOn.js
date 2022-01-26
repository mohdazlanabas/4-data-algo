var startTime = performance.now() // TIMER DONT TOUCH

// BIG O: O(n)


function linearFunc(arr) {
    for (let i = 0; i < Array.length; i++) {
        console.log(1000 * 1000)
    }
}

const arr =[1,2,3,4,5,6,7,8,9]
linearFunc(arr)


//BELOW TIMER DONT TOUCH
var endTime = performance.now() 
var num = (endTime - startTime)/1000 
let numShort = num.toFixed(4); 
console.log("This algorithm took " + numShort+ " seconds to execute. \n") 

