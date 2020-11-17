//  Works ONLY on sorted arrays
// BigO
    // Worst/average case: O(log n)
    // Best case: O(1)

// Write a function that accepts a sorted array and value and returns the index at which the value exsits, otherwise returns a -1.

function binarySearch(arr, elem){
    let start = 0;
    let end = (arr.length - 1); 
    let middle = Math.floor((start + end) / 2);
    while (start <= end) {
        if (arr[middle] > elem){
            end = middle - 1
        } else if (arr[middle] < elem) {
            start = middle + 1
        } else {
            return middle
        }
        middle = Math.floor((start + end) / 2);
    }
    return -1
}
console.log("binarySearch:", binarySearch([10,15,20,25,30,44,56,67,88,90,123,144,156,157, 192, 345,667,3452,23555,23652], 157)); // 13