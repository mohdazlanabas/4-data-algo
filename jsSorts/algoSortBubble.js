/* 
ALGORITHM: Bubble Sort
SPACE COMPLEXITY: O(1)
BEST CASE: O(n * log n)
AVERAGE CASE: O(n * log n)
WORST CASE: O(n^2)
STABLE: Yes
Method: Exchanging
*/

// ARRAY GENERATOR

randomNumber1 = (Math.random()*10+9);
arrayLength = Math.round(randomNumber1);
// console.log("Array Length is " + arrayLength)

randomNumber2 = (Math.random()*1000);
arrayNumberOld = Math.round(randomNumber2);
let arrayOld = [arrayNumberOld];
//console.log(arrayOld);

for(let k = 0; k < arrayLength; k++) {
    randomNumber3 = (Math.random()*1000);
    arrayNumberLoop = [Math.round(randomNumber3)];
    arrayOld.push(arrayNumberLoop);
//    console.log(arrayOld);
}  

// DONT TOUCH ABOVE
// SORT ALGORITHM: BUBBLE

const arr = arrayOld;
var startTime = performance.now()
count = 0
function bubbleSort(array) {
    const arr = array.slice();
        for(let i = 0; i < arr.length-1; i++) {
            for (let j = 0; j < arr.length -1- i; j++) {
                if(arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                        count = count + 1
 //                       console.log (i,j);
                }
            }
        }
        return arr;
}

// DONT TOUCH BELOW
//SORT OUTPUT

let textBefore = arr.toString();
let textAfter = bubbleSort(arr).toString()

console.log("\nALGORITHM: BUBBLE SORT")
console.log("\nIterations: - commented out -")

console.log("Array Length is = " + (arr.length))

var endTime = performance.now()
var num = (endTime - startTime)/1000
let numShort = num.toFixed(4);
console.log("This algorithm did " + count + " number of iterations.")
console.log("This algorithm took " + numShort+ " seconds to execute. \n")

console.log("Array Before Sorting =\n" + (textBefore))
console.log("\nArray After Sorting = \n" + (textAfter) + "\n");