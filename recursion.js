// Factorial Example (Iterative Version)
let factorial = (num) => {
    let total = 1;
    for(i = num; i > 0; i--){
        total *= i
    }
    console.log("factorial:", total); // 24
}
factorial(4)

// Recursive Factorial Refactor
let recursiveFactorial = (num) => {
    if(num<=1) return 1;
    return num * recursiveFactorial(num-1)
}
console.log("recursiveFactorial:", recursiveFactorial(2)); // 2

//------------------//

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
console.log("collectOddValues:", collectOddValues([1,2,3,4,5,6,7,8,9])); // [ 1, 3, 5, 7, 9 ]

// Pure Recursion Refactor
let collectOddValuesPureRecursion = (arr) => {

    let newArr = []

    if (arr.length === 0) return newArr;
    
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    };

    newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
    return newArr;
}
console.log("collectOddValuesPureRecursion:", collectOddValuesPureRecursion([1,2,3,4,5,6,7,8,9])); // [ 1, 3, 5, 7, 9 ]

//------------------//

// Write a recursive function that accepts a positive base and exponent. Return the power of the base to the exp. 
let power = (base,pwr) => {
    if (pwr <= 0) return 1
    return base * power(base,pwr-1)
}
console.log("power:", power(4,4)); // 256

//------------------//

// Return the product of all numbers in an array.
let productOfArray = (arr) => {
    
    if (arr.length < 2) return arr[0]
    let answer = arr[0] * arr[1]
    if (arr.length === 2) return answer

    return answer * productOfArray(arr.slice(2))
}
console.log("productOfArray:", productOfArray([1,2,3,10])); // 60

//------------------//

// Return the sum of all the numbers from 0 to the number passed to the recursive function
function recursiveRange(num){
    if (num <= 0) return 0;
    let addThis = num
    return num + recursiveRange(num-1)
}
console.log("recursiveRange:", recursiveRange(10)); // 55

//------------------//

// Return the nth number in the Fibonacci sequence.
function fib(num){
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}
console.log("fib:", fib(4)); // 3
