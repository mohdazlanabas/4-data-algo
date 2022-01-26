/* 
ALGORITHM: Indertion Sort
SPACE COMPLEXITY: O(1)
BEST CASE: O(n^ log n)
AVERAGE CASE: O(n * log n)
WORST CASE: O(n^n)
STABLE: Yes
Method: Insertion
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

const array= arrayOld;
var startTime = performance.now()
count = 0

// DONT TOUCH ABOVE
// SORT ALGORITHM: INSERTION


function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {
            if (array[j] < array[j-1]) {
                const temp = array [j];
                array[j] = array [j-1];
                array[j-1] = temp;
            } else {
                break;
            }
            }
        }
        return array;
    }

// DONT TOUCH BELOW
//SORT OUTPUT

let textBefore = arrayOld.toString();
let textAfter = insertionSort(array).toString()

console.log("\nIterations: - commented out -")
console.log("\nALGORITHM: SELECTION SORT")

console.log("Array Length is = " + (array.length))

var endTime = performance.now()
var num = (endTime - startTime)/1000
let numShort = num.toFixed(4);
console.log("This algorithm did " + count + " number of iterations.")
console.log("This algorithm took " + numShort+ " seconds to execute. \n")

console.log("Array Before Sorting =\n" + (textBefore))
console.log("\nArray After Sorting = \n" + (textAfter) + "\n");