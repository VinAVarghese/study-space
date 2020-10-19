let maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i=0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i -num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
}

maxSubarraySum([1,2,45,3,4,2,66,4,5,4], 2) // 70

