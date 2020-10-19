// Freq Counter >> HASH MAP
let counter = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
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
            return false
        }
        if(map2[key] !== map1[key]){
            return false
        }
    }
    return true
}

arr1 = ["a",2,3,44,55,66,66]
arr2 = [1,3,3,44,55,56,66]