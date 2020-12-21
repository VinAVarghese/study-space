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

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Graph Traversal Methods - Depth-First
    dfsRecursive(start){
        let results = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        DFS(start);

        function DFS(vertex){
            if (!vertex) return null;
            results.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return DFS(neighbor);
                }
            })
        }

        return console.log("dfsRecursive Starting Node:(", start, ") ||| Traversal Results:", results);
    }
    dfsIterative(start){
        let stack = [start];
        let results = [];
        let visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }

        return console.log("dfsIterative Starting Node:(", start, ") ||| Traversal Results:", results);
    }

    // Graph Traversal Methods - Breadth-First
}

let graph = new Graph;
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Dallas");
graph.addVertex("HongKong");
graph.addVertex("LosAngeles");
graph.addVertex("Amsterdam");
graph.addVertex("Oslo");
graph.addEdge("Tokyo", "Amsterdam");
graph.addEdge("Amsterdam", "Oslo");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "HongKong");
graph.addEdge("Dallas", "HongKong");
graph.addEdge("LosAngeles", "HongKong");
graph.addEdge("Dallas", "Aspen");
// graph.removeEdge("Tokyo", "Dallas");
// graph.removeVertex("HongKong");
console.log(graph)



// GRAPH TRAVERSAL:
    // Depth-First Search/Traversal
        // Follows one branch all the way down and then the same to it's neighbors
    // Example Executions
// graph.dfsRecursive("Dallas");
// graph.dfsIterative("Dallas");

    // Breadth-First Search/Traversal
        // 
    // Example Executions
