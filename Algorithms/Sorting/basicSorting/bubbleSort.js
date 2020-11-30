// Bubble Sort:
    // - The largest values "bubble" up to the top
    // Big O:
        // If nearly sorted array O(n)
        // If completely random array O(n^2)
        // Space complexitiy = O(1)

const bubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return console.log("bubbleSortedArr", arr);
}

bubbleSort([37,45,29,-3,88,8]) // [ -3, 8, 29, 37, 45, 88 ]