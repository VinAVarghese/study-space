let maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i=0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log("maxSubarraySum: ", maxSum);
}
maxSubarraySum([1,2,45,3,4,2,66,4,5,4], 2) // 70

// //////////

let minSubArrayLen = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    let length = 0;
    if (arr.reduce((a,b)=>a+b) < num) return 0;

    for (let i=0; i < arr.length; i++){
        if (i > num) return 1;
    }
}
minSubArrayLen([1,2,45,3,4,2,66,4,5,4], 67) // 2 -> because [2,66] is the smallet subarray that is greater that 67

// //////////

let findLongestSubstring = (str) => {
    let longest = 1;
    for(let i = 0; i < str.length; i++){
        
    }
}

findLongestSubstring('rithmschool') // 7  