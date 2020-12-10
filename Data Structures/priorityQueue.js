// PRIORITY QUEUE NOTES:
// - A data structure where each element has a priority
    // - higher priority elements are served before lower
// - An abstract idea that can be implemented as either an array, heap, etc.
// - Heaps are commonly used to implement (much faster)


// Creating a MinBinaryHeap (low numbered priorities will be at the top)
class PriorityQueue {
    constructor () {
        this.values = [];
    }

// Enqueue (same as 'insert' but checking priority value of Node for placement)
    enqueue (val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

// Dequeue (same as remove/extract but checking priority value of Node for placement)
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return console.log('Extracted Min:', min); 
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 1 * idx + 1; // - 2n + 1 = left child index
            let rightChildIdx = 1 * idx + 2; // - 2n + 2 = right child index
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }            
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }            

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("Common Cold", 5);
ER.enqueue("High Fever", 4);
ER.enqueue("Gunshot Wound", 1);
ER.enqueue("Broken Arm", 2);
ER.enqueue("Glass in Foot", 3);
console.log("Emergency Room (minBinaryHeap w/ Priority Queue): ", ER.values)