/* 
ALGORITHM: Shell Sort
SPACE COMPLEXITY: O(1)
BEST CASE: O(n * log n)
AVERAGE CASE: Depends on Gap Size
WORST CASE: Depends on Gap Size
STABLE: No
Method: Insertion
*/

const shellSort = (arr, n = arr.length) => {
  //Reduce the interval in each cycle
  for (let interval = n / 2; interval > 0; interval /= 2) {
    //Sort the element using insertion sort in each cycle.
    for (let i = interval; i < n; i += 1) {
      let temp = arr[i];
      let j;
      for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
        arr[j] = arr[j - interval];
      }
      arr[j] = temp;
    }
  }
}

// INPUT
const arr = [9, 8, 3, 7, 5, 6, 4, 1];
shellSort(arr);
console.log(arr);