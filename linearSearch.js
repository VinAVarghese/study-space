// Moving one item at a time through an object/array
// Automatically implemented in Javascript methods like "indexOf", "includes", etc.
// BigO === O(n)




//  Write a function that accepts an array and value and returns the index at which the value exists. Return -1 if it doesn't exist.
function linearSearch(arr, val) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i
    }

    return -1
}

console.log("linearSearch:", linearSearch([10,15,20,25,30], 20)); // 2