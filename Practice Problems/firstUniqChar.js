// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function(s) {
    let counter = {};
    let index = {};
    let firstUniq = s.length;
    for (let i = 0; i < s.length; i++){
        counter[s[i]] = (counter[s[i]] || 0) + 1
        index[s[i]] = i
    }
    
    for(let key in counter){
        if (counter[key] === 1 && index[key] < firstUniq){
            firstUniq = index[key];
        }
    }

    if (firstUniq === s.length) {
        return -1
    } else {
        return firstUniq
    }
    
};

console.log("firstUniqChar:",firstUniqChar("leetcode"));

// Review for better Big(O)