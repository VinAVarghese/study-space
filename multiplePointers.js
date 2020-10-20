// Determine if there are a pair of values in a sorted array where the average of the pair equals the target average.
function averagePair(arr, num){
    if(arr.length === 0) {
        console.log("averagePair:",false); return;
    }
    let start = 0;
    let end = arr.length - 1;
    while ( start < end ){
        let avg = (arr[start] + arr[end])/2;
        if(avg < num){
            start++;
        } else if (avg > num){
            end--;
        } else if (avg === num){
            console.log("averagePair:",true); return;
        }
    }
    console.log("averagePair:",false); return;
  }
  averagePair([1,3,3,5,6,7,10,12,19],8) // true

//-------------------------//

// Check whether the characters in the first string appear somewhere in the second string without their order changing. 
  function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) {
    console.log("isSubsequence:",true);return;
    }
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) {
        console.log("isSubsequence:",true);return;
      }
      j++;
    }
    console.log("isSubsequence:",false);return;
  }
  isSubsequence("hello", "hello world") // true
  isSubsequence("abc", "acb") // false (order matters)

//-------------------------//

// Complete this function that accepts a variable number of arguments, and check whether there are duplicates.
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          console.log("areThereDuplicatres:", true); return;
      }
      start++
      next++
    }
    console.log("areThereDuplicatres:", false); return;
  }

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true