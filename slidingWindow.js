let maxSubarraySum = (arr, num) => {
    let firstPos = 0;
    let lastPos = num-1;
    let maxSum = -Infinity;
    while (lastPos < arr.length){
        let sum = arr[firstPos] + arr[lastPos];
        sum > maxSum ? maxSum = sum: null;
        firstPos++;
        lastPos++;
    }
    return maxSum
}

maxSubarraySum([1,2,45,3,4,2,66,4,5,4], 2)