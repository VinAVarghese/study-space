//  Works only on sorted arrays

// Write a function that accepts a sorted array and value and returns the index at which the value exsits, otherwise returns a -1.

function binarySearch(arr, val){
    let left = 0;
    let right = (arr.length - 1); 
    while (left < right) {
        let center = Math.round((right - left) / 2) + left;
        if (arr[center] > val){
            right = center
        } else if (arr[center] < val){
            left = center
        } else {
            return center + 1
        }
    }
    return -1
}
console.log("binarySearch:", binarySearch([10,15,20,25,30,44,56,67,88,90,123,144,156,157, 192, 345,667,3452,23555,23652], 157)); // 14