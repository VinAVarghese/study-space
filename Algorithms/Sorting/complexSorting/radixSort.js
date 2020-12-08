// Radix Sort:
    // - Not a comparison sort
    // - An integer sort that sorts numbers very fast based on the number of digits in a given number
    
    // Big O:
        // n = lenght of array
        // k = number of digits (average)
        // Time: O(nk)
        // Space: O(n + k)

// getDigit Helper Method - get the single digit at i position of a given number
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// digitCount Helper Method - get the amount of digits in a given number
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits Helper Method - return the amount of digits in the largest number in a list of numbers
const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    for (let i = 0; i < maxDigitCount; i++) {
        let bucket = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            bucket[digit].push(nums[j]);
        }
        nums = [].concat (...bucket);
    }
    return nums; 
}

console.log("Radix Sort:", radixSort([123,43,23,45,6,7,8,234,5,151515,23,34,5555]));