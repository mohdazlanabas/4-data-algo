/* 
ALGORITHM: Merge Sort
SPACE COMPLEXITY: O(n)
BEST CASE: O(n * log n)
AVERAGE CASE: O(n^ log n)
WORST CASE: O(n*log n)
STABLE: Yes
Method: Merging
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
const array = arrayOld;
var startTime = performance.now()
count = 0

// DONT TOUCH ABOVE
// SORT ALGORITHM: MERGE

const merge = (leftArr, rightArr) => {
    const output =[];
    let leftIndex =0;
    let rightIndex =0;

    while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl=rightArr[rightIndex];

        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
        }
            return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

// Recursive

const mergeSort = arrau => {
    if(array.length <= 1) {
        return array;
}
const middleIndex = Math.floor(array.length /2);
const leftArr = array.slice(0, middleIndex);
const rightArr = array.slice(middleIndex);

return merge()
    mergeSort(leftArr),
    mergeSort(rightArr);
};

// DONT TOUCH BELOW
//SORT OUTPUT

let textBefore = arrayOld.toString();
let textAfter = mergeSort(array).toString()

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