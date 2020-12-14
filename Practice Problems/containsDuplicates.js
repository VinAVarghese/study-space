// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Ex:  Input: [1,2,3,1] 
//      Output: true

const containsDuplicates = (nums) => {
    let table = {};
    for (let i of nums) {
        table[i] = (table[i] || 0) + 1;
        console.log(table);
        if (table[i] > 1) return true;
    }

    return false
}

console.log("Contains Duplicates:", containsDuplicates([1,2,3,1,4,5,6]));

// Time Complexity O(n)