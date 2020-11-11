// QUEUE NOTES : 
// What is a queue? 
// - A Data structure where you add and remove
// - FIFO data structure: First In First Out


// USING AN ARRAY TO IMPLEMENT A QUEUE
// NOTE: In both methods, you are adding or removing from the beginning of the array
// which means you are re-indexing so in cases of Queues, classes or LLs are more efficient than arrays
// METHOD 1
let que = [];
que.push("First");
que.push("Second");
que.push("Third");
que.shift() // when you shift, it removes the first pushed entry (FIFO)
// METHOD 2
let que2 = [];
que2.unshift("First");
que2.unshift("Second");
que2.unshift("Third");
que2.pop() // when you pop, it removes the first pushed entry (FIFO)

// USING A LINKED LIST TO IMPLEMENT A QUEUE 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.length;
    }
    dequeue(){
        if(!this.first) return null;
        let dequeued = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        dequeued.next = null;
        this.length--;
        return dequeued;
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

let llQueue = new Queue;
llQueue.enqueue("first in")
llQueue.enqueue("second in")
llQueue.enqueue("third in")
llQueue.dequeue()

console.log("The LinkedList queue: ", llQueue.print());