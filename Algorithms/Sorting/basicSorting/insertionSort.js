// Insertion Sort:
    // - Gradually creating a larger sorted left portion 
    // Big O:
        // Worst case: O(n^2)
        // If almost sorted, O(n)
        // Space complexitiy = O(1)

const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i]
        for (var j = i-1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current
    }
    return console.log(arr);
}

insertionSort([2,1,9,76,4]) // [1,2,4,9,76]