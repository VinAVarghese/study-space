// Find out if the two arrays have the same frequency of numbers/values
let sameFrequency = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        console.log("sameFrequency:", false); return;
    }

    let map1 = {};
    let map2 = {};
    for(let i of arr1){
        map1[i] = (map1[i] || 0) + 1
    }
    for(let i of arr2){
        map2[i] = (map2[i] || 0) + 1
    }
    for(let key in map1){
        if (!key in map2){
            console.log("sameFrequency:", false); return;
        }
        if(map2[key] !== map1[key]){
            console.log("sameFrequency:", false); return;
        }
    }
    console.log("sameFrequency:", true); return;
}

sameFrequency([1,8,2],[2,8,1]) // true
sameFrequency([2,2],[2,2,2]) // false

//-------------------------//

// Complete this function that accepts a variable number of arguments, and check whether there are duplicates.
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) console.log("areThereDuplicates:", true); return;
    }
    console.log("areThereDuplicates:", false); return;
  }

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
