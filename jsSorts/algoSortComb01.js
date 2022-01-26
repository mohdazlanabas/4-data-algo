
function combSort (inputArray) {
    if (inputArray.length < 2) return inputArray

    let gap = inputArray.length
    do{        
        gap = gap > 1 ? Math.floor(gap / 1.3) : 1

        for(let i = 0; i * gap < inputArray.length; i++) {
        if(inputArray[i] > inputArray[i*gap]) {
            let temp = inputArray[i]
            inputArray[i] = inputArray[i*gap]
            inputArray[i*gap] = temp
            }
        }
    }   while (gap > 1)
        return inputArray
}

    const unsortedArray = [1,3,4,2,-2232,-23,0,0,0,123,123,232]
    console.log(combSort(unsortedArray.slice()))