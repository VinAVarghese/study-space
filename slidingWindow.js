// Return the largest sum of the subarray. Subarray length defined by num. 
let maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    if (arr.length < num) return null;

    for (let i=0; i < num; i++){
        maxSum += arr[i];
    }
    let tempMax = maxSum;
    for (let i = num; i < arr.length; i++){
        tempMax += arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempMax);
    }
    console.log("maxSubarraySum:", maxSum);
}
maxSubarraySum([1,2,45,3,4,2,66,4,5,4], 2) // 70

// //////////

// Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
let minSubArrayLen = (arr, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    while (start < arr.length){
    // if current window doesn't add up to the given sum then 
		// move the window to right
        if (total < sum && end < arr.length){
            total += arr[end];
                end++;
        }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
        else if (total >= sum){
            minLen = Math.min(minLen, end - start);
                total -= arr[start];
                start++;
        }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }
    console.log("minSubArrayLen:", minLen === Infinity ? 0 : minLen);
}
minSubArrayLen([1,2,45,3,4,2,66,4,5,4], 67) // 2 -> because [2,66] is the smallet subarray that is greater that 67

// //////////

let findLongestSubstring = (str) => {
    let longest = 0;
    let seen = {};
    let start = 0;

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if (seen[char]){
            start = Math.max(start, seen[char]);
        }
    // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    console.log("findLongestSubstring:", longest);
}

findLongestSubstring('rithmschool') // 7  