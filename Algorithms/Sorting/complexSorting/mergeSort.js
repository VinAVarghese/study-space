// Merge Sort:
    // - 
    // Big O:
        // Time: O(n log n)
        // Space: O(n)

// merge Helper Function
var merge = (arr1, arr2) => {
    var results = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }

    // Push the remaining values of any longer array
    while (i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length){
        results.push(arr2[j])
        j++;
    }

    return console.log("merged:", results);
}
// merge([1,3,6], [4,5,12,14])

// mergeSort Function
var mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    var answer = merge(left,right);
    return answer
}

mergeSort([10,24,76,73])