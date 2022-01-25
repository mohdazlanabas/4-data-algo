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

function quickSort(array) {
    if (array.length === 1) {
        return array;}
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }}

        if (leftArr.length > 0 && rightArr.length > 0) {
            return [ ...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        } else if (leftArr.length > 0) {
                    return [ ...quickSort(leftArr), pivot];
                } else {
                    return [pivot, ...quickSort(rightArr)];
                }
                }

/*    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (const el of array.slice(0, array.length -1 ) ) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    return [...quickSort(leftArr), pivot, ... quickSort(rightArr)];
} */

// DONT TOUCH BELOW
//SORT OUTPUT

let textBefore = arr.toString();
let textAfter = quickSort(arr).toString()

console.log("\nIterations: - commented out -")
console.log("\nALGORITHM: SELECTION SORT")

console.log("Array Length is = " + (arr.length))

var endTime = performance.now()
var num = (endTime - startTime)/1000
let numShort = num.toFixed(4);
console.log("This algorithm did " + count + " number of iterations.")
console.log("This algorithm took " + numShort+ " seconds to execute. \n")

console.log("Array Before Sorting =\n" + (textBefore))
console.log("\nArray After Sorting = \n" + (textAfter) + "\n");