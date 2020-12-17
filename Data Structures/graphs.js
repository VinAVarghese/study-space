// GRAPHS NOTES:
    // - A collection of nodes and their connections
    // - Not nessesarily a tree or linked list with start/root and end nodes
    
    // Use cases  
        // - Maps, social networking, etc.

    // Terminology
        // Vertex = node
        // Edge = connections 
        // Undirected Graphs
            // - Graphs have no direction or order in their connections, can go in any directon
        // Directed Graphs
            // - Edges point in specificed directions
        // Unweighted Graphs
            // - Edges have no value
        // Weighted Graphs
            // - Connections/edges have values assosiated with them that influences the relationship of it's nodes/vertex

    // Modeling - Representing vertex relations and edges
        // Adjacency Matrix 
            // - Takes up more space when there are less edges (sparce graphs)
            // - Slower to iterate over all edges
            // - Faster to query/lookup specific edges
        // Adjacency List
            // - Can take up less space where there are less edges (sparse graphs)
            // - Faster to iterate over all edges
            // - Can be slower to query/lookup specific edges

// Undirected Graph Implementation
class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vert1, vert2){
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2);
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1);
    }

    removeVertex(){
        
    }
}

let graph = new Graph;
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Dallas");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");
// graph.removeEdge("Tokyo", "Dallas");
console.log(graph)