// Dijkstras Algorithm
    // A weighted graph traversal algorithim that uses priority queue
    // It finds the shortest path to between two vertices on a graph
    
// Weighted Graph Implementation
class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
    dijkstras(start, finish){
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let smallest;
        let path = [];
        for(let vertex in this.adjacencyList){
            if (vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if (smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let canidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(canidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = canidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, canidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    } 
}

// Priority Queue Implementation (needed for Dijkstras Algorithim to work)
class PriorityQueue {
    constructor () {
        this.values = [];
    }
    enqueue(val, priority){
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
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min 
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 1 * idx + 1;
            let rightChildIdx = 1 * idx + 2;
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
// Node Class (needed for Priority Queue to work)
class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// let wG = new WeightedGraph;
// wG.addVertex("Seattle")
// wG.addVertex("NewYork")
// wG.addVertex("Austin")
// wG.addVertex("Boise")
// wG.addVertex("Columbus")
// wG.addVertex("Charlotte")
// wG.addEdge("Seattle", "NewYork", 8)
// wG.addEdge("Seattle", "Austin", 12)
// wG.addEdge("Columbus", "Boise", 6)
// wG.addEdge("Columbus", "Austin", 1)
// wG.addEdge("NewYork", "Columbus", 2)
// wG.addEdge("Charlotte", "Austin", 4)
// wG.addEdge("Boise", "Charlotte", 2)
// wG.addEdge("Austin", "NewYork", 4)
// console.log(wG);
// console.log(wG.dijkstras("Seattle", "Charlotte"));

let wG = new WeightedGraph;
wG.addVertex("A")
wG.addVertex("B")
wG.addVertex("C")
wG.addVertex("D")
wG.addVertex("E")
wG.addVertex("F")
wG.addEdge("A", "B", 4)
wG.addEdge("A", "C", 2)
wG.addEdge("B", "E", 3)
wG.addEdge("C", "D", 2)
wG.addEdge("C", "F", 4)
wG.addEdge("D", "E", 3)
wG.addEdge("D", "F", 1)
wG.addEdge("E", "F", 1)
console.log(wG);
console.log(wG.dijkstras("A", "E"));

