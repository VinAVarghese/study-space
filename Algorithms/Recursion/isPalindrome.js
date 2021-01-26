// Recursive function that returns true if palindrome and false if not

function isPalindrome(str, revStr=''){
    if(revStr.length === str.length){
        if (revStr === str) {
            return true
        } else {
            return false
        }
    }

    revStr = reverseHelper(str)

    return isPalindrome(str, revStr)
}

function reverseHelper(str){
    if(str.length <= 1) return str;
    return reverseHelper(str.slice(1)) + str[0];
}

console.log('isPalindrome (awesome): ', isPalindrome('awesome')); // false
console.log('isPalindrome (tacocat): ', isPalindrome('tacocat')); // true



// Alternative Solution
function isPalindromeAlt(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1]; // will return true of false depending on truthyness of this statement
    if(str[0] === str.slice(-1)) return isPalindromeAlt(str.slice(1,-1))
    return false;
}

console.log('isPalindromeAlt (awesome): ', isPalindromeAlt('awesome')); // false
console.log('isPalindromeAlt (tacocat): ', isPalindromeAlt('tacoacat')); // true