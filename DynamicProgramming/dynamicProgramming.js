// Dynamic Programming - A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. 

    // Indicator that Dynamic Programming can be used? 1/2: Overlapping Subproblems

// Overlapping Subproblems - A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

    // Indicator that Dynamic Programming can be used? 2/2: Optimal Substructure

// Optimal Substructure - A problem where an optimal solution can be constructed from optimal solutions of its subproblems

// Subproblems Example
// Big O: Time = O(2^n)
const recursiveFib = (n) => {
    if(n <= 2) return 1;
    return recursiveFib(n-1) + recursiveFib(n-2);   
}
console.log("recursiveFib:", recursiveFib(4));


//////// Dynamic Programming Example 1: ////////

// Issue: The Big O is bad here (O(2^n)) but using memoization, we can bring it down O(n) and do larger numbers without crashing the computer
// Example 1/Solution: Memoization
// Memoization - Using a data structure to log results so that there is no repeated work.
// Big O: Time = O(n) Space = worse than tabulation
function memoizationFib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var res = memoizationFib(n-1, memo) + memoizationFib(n-2, memo);
    memo[n] = res;
    return res; 
}
console.log("memoizationFib:", memoizationFib(400));


//////// Dynamic Programming Example 2: ////////

// Example 2/Solution: Tabulation
// Tabulation - Storing the result of a previous result in a "table" (usually an array using iteration). 
// Better space complexity can be achieved using tabulation. No call stack overflowing like memoization can potentially bring.
// Big O: Time = O(n) Space = better than memoization
function tabulationFib(n) {
    if(n <-n) return 1;
    var fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n]
}
console.log("tabulationFib:", tabulationFib(400)); 

// console.log("memoizationFib:", memoizationFib(10000)); // Call stack size will exceed
console.log("tabulationFib - Space Complexity Test:", tabulationFib(10000)); // JS rounds to Infinity but space complexity allows for it

