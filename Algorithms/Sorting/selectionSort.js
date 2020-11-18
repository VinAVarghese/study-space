// Selecton Sort Notes: 
    // - Places small values into postion one at a time
    // - Finds the minimum and brings it to the beginning
    // Big O:
        // - O(n^2)


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if (i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return console.log("Selection Sort:", arr);
}

selectionSort([34,22,10,19,17]) // [ 10, 17, 19, 22, 34 ]