// LeetCode
// Remove Duplicates from Sorted Array

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// CLARIFICATION: the returned number (x) of unique items should populate the front x of the returned array

let removeDuplicates = (nums) => {

    let i = 0;
    
    for (var j = 1; j < nums.length; j++) {
        
        if(nums[i] !== nums[j]){
            nums[i+1] = nums[j]
            i++;
        }
        
    }
    
    return console.log(i+1, nums);
}

// SOLUTION: Two Pointers.
// Using two pointers, you can check if one equals the other and if it doesn't
// i.e. the second pointer points to a unique indexed item, move it up behind the first pointer's item and increment both pointers

removeDuplicates([0,1,1,2,3,3,4,5,5,5,6,7,8]) // 9, [0,1,2,3,4,5,6,7,8, 5,6,7,8]
removeDuplicates([-1,0,0,1,2,3,3,7,8]) // 7, [-1,0,1,2,3,7,8, 7,8]