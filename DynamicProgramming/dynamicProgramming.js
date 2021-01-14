// Dynamic Programming - A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. 

    // Indicator that Dynamic Programming can be used? 1/2: Overlapping Subproblems

// Overlapping Subproblems - A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

    // Indicator that Dynamic Programming can be used? 2/2: Optimal Substructure

// Optimal Substructure - A problem where an optimal solution can be constructed from optimal solutions of its subproblems

// Subproblems Example
const recursiveFib = (n) => {
    if(n <= 2) return 1;
    return recursiveFib(n-1) + recursiveFib(n-2);   
}
console.log(recursiveFib(4));

