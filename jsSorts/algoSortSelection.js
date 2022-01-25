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
function selectionSort(array) {
    const arr = array.slice();

        for(let i = 0; i < arr.length-1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                    count = count + 1
                        console.log (i,j);
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
}

// DONT TOUCH BELOW
//SORT OUTPUT

let textBefore = arr.toString();
let textAfter = selectionSort(arr).toString()

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