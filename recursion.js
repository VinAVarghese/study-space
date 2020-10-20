// Factorial Example (Iterative Version)
let factorial = (num) => {
    let total = 1;
    for(i = num; i > 0; i--){
        total *= i
    }
    console.log("factorial:", total); 
}
factorial(4)

// Recursive Factorial Refactor
let recursiveFactorial = (num) => {
    if(num===1) return 1;
    return num * recursiveFactorial(num-1)
}
console.log("recursiveFactorial:", recursiveFactorial(4));

// Helper Method Recursive
let collectOddValues = (arr) => {

    let result =[]

    function helper(helperInput){
        if (helperInput.length === 0) return;
        
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        };

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}
console.log("collectOddValues:", collectOddValues([1,2,3,4,5,6,7,8,9]));

// Pure Recursion Refactor
let collectOddValuesPureRecursion = (arr) => {

    let newArr =[]

    if (arr.length === 0) return newArr;
    
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    };

    newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
    return newArr;
}
console.log("collectOddValuesPureRecursion:", collectOddValuesPureRecursion([1,2,3,4,5,6,7,8,9]));