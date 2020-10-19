// Determine if there are a pair of values in a sorted array where the average of the pair equals the target average.
function averagePair(arr, num){
    if(arr.length === 0) {
        console.log("averagePair:",false); 
        return;
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
            console.log("averagePair:",true); ; 
            return;
        }
    }
    console.log("averagePair:",false); 
    return;
  }
  averagePair([1,3,3,5,6,7,10,12,19],8) // true

// //////////

// Check whether the characters in the first string appear somewhere in the second string without their order changing. 
  function isSubsequence(str1, str2) {
    let pointer = 0;
    
    for (let char of str1){
        if(char === str2[pointer] || char !== str2[pointer]){
            pointer++;
        }
        if(pointer>str2.length){
            console.log("isSubsequence:", false);
            return;
        }
    }
    console.log("isSubsequence:", true); 
    return;
  }
  isSubsequence("hello", "hello world") // true

