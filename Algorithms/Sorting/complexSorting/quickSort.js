// Merge Sort:
    // - Like merge sort, exploits the fact that arrays of 0 & 1 elements are always sorted
    // - Works by selecting one element (called the 'pivot') and finding the index where the pivot should end up in the sorted array
    // Big O:
        // 

// pivot Helper Function
const pivot = (arr, start=0, end=arr.length-1) => {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

// swap Helper Function
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Quick Sort
const quickSort = (arr, left=0, right=arr.length-1) => {
    if(left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
    }
    return arr
}

console.log("Quick Sorted Array: ", quickSort([100,-3,4,6,9,1,2,5,3]));