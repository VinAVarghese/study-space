// Recursive String Reversal
function recursiveReverse(str, i=str.length, reversed=[]){
    if (i === -1) return reversed.join("")
    i--;
    reversed.push((str[i]))
    return recursiveReverse(str, i, reversed)
  }
console.log("recursiveReverse", recursiveReverse("pathway"));

    // Alternative Solution 
    function altRecursiveReverse(str){
        if(str.length <= 1) return str;
        return altRecursiveReverse(str.slice(1)) + str[0];
    }
    console.log("altRecursiveReverse", altRecursiveReverse("pathway"));