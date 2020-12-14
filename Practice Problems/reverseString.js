// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.



//Using two pointers
var reverseString = function(s) {
    let end = s.length - 1
    let start = 0;
    while(start < end){
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        end--;
        start++;
    }
    return s
};

console.log("reverseString:", reverseString(["h","e","l","l","o"]));