// Dijkstras Algorithm
    // Weighted graph traversal algo that uses priority queue
    // Finds shortest path to between two vertices on a graph

    
// Weighted Graph Implementation
class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({vertex:v2, weight});
        this.adjacencyList[v2].push({vertex:v1, weight});
    }

    dijkstras(start, end){
        const nodes = new PriorityQueue();
        let distances = {};
        let previous = {};

        for(let vertex in this.adjacencyList){
            if (vertex === start){
                distances[vertex] = 0;
            }
        }

        while(nodes !== null){

        }
    } 
}

// Priority Queue Implementation (needed for Dijkstras algorithim to work)
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) { 
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() { 
        return this.values.shift();
    };
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

let wG = new WeightedGraph;
wG.addVertex("Seattle")
wG.addVertex("NewYork")
wG.addVertex("Austin")
wG.addVertex("Boise")
wG.addVertex("Columbus")
wG.addVertex("Charlotte")
wG.addEdge("Seattle", "NewYork", 8)
wG.addEdge("Columbus", "Boise", 6)
wG.addEdge("NewYork", "Columbus", 2)
wG.addEdge("Charlotte", "Austin", 4)
wG.addEdge("Boise", "Charlotte", 2)
wG.addEdge("Austin", "NewYork", 3)
console.log(wG);
wG.dijkstras("Seattle", "Charlotte")