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

class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        while (this.values[parentIdx] < this.values[idx]){
            let parent = this.values[parentIdx];
            let child = this.values[idx];
            this.values[parentIdx] = child;
            this.values[idx] = parent;
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
        return this.values;
    }
}

let maxBH = new MaxBinaryHeap();
maxBH.insert(41);
maxBH.insert(39);
maxBH.insert(33);
maxBH.insert(18);
maxBH.insert(27);
maxBH.insert(12);
console.log("MaxBinaryHeap", maxBH.values);