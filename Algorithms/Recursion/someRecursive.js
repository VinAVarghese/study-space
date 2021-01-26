// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, func){
    if (arr.length < 1) return false;
    if(func(arr[0])) return true;
    return someRecursive(arr.slice(1), func);
}

console.log("someRecursive: ", someRecursive([1,2,3,4], isOdd)); // true
console.log("someRecursive: ", someRecursive([4,6,8,9], isOdd)); // true
console.log("someRecursive: ", someRecursive([4,6,8], isOdd)); // false
console.log("someRecursive: ", someRecursive([4,6,8], val => val > 10)); // false

