// STACKS NOTES : 
// What is a stack? 
// >> Concept / Collection of data with a specific lifespan / Abstract data structure
// Follows LIFO: Last in, first out
// BIG O: 
// - insertion & removal = constant time O(1)
// - searching & access = O(N)


// USING AN ARRAY TO IMPLEMENT A STACK 

// METHOD 1 (Push & Pop - Adding and removing from the end)
let stack = [];
// When you push, it adds to the end of the array
stack.push("google")
stack.push("instagram")
stack.push("youtube")
// console.log(stack); // [google, instagram, youtube]
// when you pop, it removes the last pushed entry (LIFO)
stack.pop() // youtube is removed (last item pushed)

// METHOD 2 (Unshift & Shift - Adding and removing from the beginning)
// NOTE: Efficiency for stack array is not the best since you have to re-index everything when adding or removing to the beginning
let stack2 = [];
// When you unshift, it adds to the beginning of the array
stack2.unshift("facebook")
stack2.unshift("snapchat")
stack2.unshift("vimeo")
// console.log(stack2); // [vimeo, snapchat, facebook]
// when you shift, it removes the last unshifted entry (LIFO)
stack2.shift() // vimeo is removed (last item unshifted)



// USING A LINKED LIST TO IMPLEMENT A STACK 
// Using the logic of unshift and shift for push and pop logic so that the items are added and removed 
// from the front of the list which keeps it constant time and within the LIFO pattern (stack pattern)
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst;
        }
        this.length++;
        return this.length;
    }
    pop(){
        if(!this.first) return null;
        let popped = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        popped.next = null;
        this.length--;
        return popped;
    }
    print(){
        var arr = [];
        var current = this.first;
        while (current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

let llStack = new Stack;
llStack.push("first in")
llStack.push("second in")
llStack.push("third in")
llStack.pop()

console.log("The LinkedList stack: ", llStack.print());

