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
}

let wG = new WeightedGraph;
wG.addVertex("Seattle")
wG.addVertex("NewYork")
wG.addVertex("Austin")
wG.addVertex("Boise")
wG.addVertex("Columbus")
wG.addVertex("Charlotte")
wG.addEdge("Seattle", "NewYork", 8)
wG.addEdge("Seattle", "Boise", 6)
wG.addEdge("Seattle", "Columbus", 2)
wG.addEdge("Seattle", "Austin", 4)
wG.addEdge("Seattle", "Charlotte", 2)
console.log(wG);