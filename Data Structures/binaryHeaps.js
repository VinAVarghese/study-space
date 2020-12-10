// HEAPS NOTES:
// - Heaps are a catagory of trees
    // - All rules that apply to trees apply to heaps

// - Binary Heaps
    // - Similar to a binary search tree
    // - Max two child nodes (binary)
    // - When implimenting, left nodes need to be filled before right nodes
    // - Common Use Cases
        // - Binary Heaps are used to implement Priority Queues
        // - Binary Heaps are used with graph traversal algos

// - Max Binary Heap: All children are smaller than a parent
    // - Parent nodes are always great than it's children
    // - No gaurentees between children (no implied ordering between siblings)
    // - As compact as possible (talks up the least amount of space)
        // - Both possible nodes are filled before going to the next child
// - Min Binary Heap: All children are larger than a parent
    // - Parent nodes are always smaller than it's children
    // - No gaurentees between children (no implied ordering between siblings)

// Binary Heap Array Representation:
    // - When looking for children of a parent (n = index)
        // - 2n + 1 = left child index
        // - 2n + 2 = right child index
    // - When looking for parent of a child (n = index)
        // - (n-1)/2 = parent index (floor any decimal)

// BIG O: 
    // - Insertion & Removal: O(log n)
    // - Search: O(n)

class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values;
    }

    extractMax(){ // (remove)
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return console.log('Extracted Max:', max); 
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }     

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

let maxBH = new MaxBinaryHeap();
maxBH.insert(41);
maxBH.insert(39);
maxBH.insert(33);
maxBH.insert(18);
maxBH.insert(27);
maxBH.insert(12);
maxBH.insert(55);
maxBH.extractMax();
console.log("MaxBinaryHeap", maxBH.values);