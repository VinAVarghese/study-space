// TREE NOTES:
    // - Data structure that consists of nodes in a parent / child relationships
    // - Lists are linear but trees are nonlinear (they can have more than one branch from a node)
    // - Children can't point to their siblings in a tree (i.e. only pointing from parents to children)

// Definitions:
    // - ROOT - top node in a tree
    // - CHILD - a node directly connected to another node moving away from the root
    // - PARENT - converse notion of a child
    // - SIBLINGS - a group of nodes with the same parent
    // - LEAF - a node with no children (a child can be a lead but a lead is never a parent)
    // - EDGE - the actual connect between one node and another (like a branch)

// Use Cases:
    // - HTML DOM
    // - Network routing
    // - Abstract syntax trees
    // - AI
    // - Computer file systems

// Tree Traversal:
    // - Search types apply to all types of trees
    // - Breadth-first Search
        // - Horizontal type search 
        // - Working across the witdh of the tree
    // - Depth-first Search
        // - Vertical type search 
        // - Going down to the end of the branch and then back up and next
        // - Three versions (InOrder / PreOrder / PostOrder)



// IMPLEMENTING TREE TRAVERSAL (using a Binary Search Tree for example)
    class Node {
        constructor(val){
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    class BinarySearchTree {
        constructor(){
            this.root = null;
        }
        insert(val){
            let newNode = new Node(val);
            if (this.root === null){
                this.root = newNode;
                return this;
            }
            let current = this.root;
            while(true){
                if(val === current.val) return console.log("Duplicate value inserted");
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }

// Breadth-first Searching
        BFS(){
            let data = [];
            let queue = [];
            let node = this.root;
            queue.push(node);
            while(queue.length){
                node = queue.shift()
                data.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return console.log("BFS", data); 
        }

// Depth-first Searching - PreOrder (recursively)
        DFSPreOrder(){
            let data = [],
                current = this.root;
            const traverse = (node) => {
                data.push(node.val);
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right)
            }
            traverse(current)
            return console.log("DFS PreOrder", data); 
        }
        
// Depth-first Searching - PostOrder (recursively)
        DFSPostOrder(){
            let data = [],
                current = this.root;
            const traverse = (node) => {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right)
                data.push(node.val);
            }
            traverse(current)
            return console.log("DFS PostOrder", data); 
        }
        
// Depth-first Searching - InOrder (recursively)
        DFSInOrder(){
            let data = [],
                current = this.root;
            const traverse = (node) => {
                if(node.left) traverse(node.left);
                data.push(node.val);
                if(node.right) traverse(node.right)
            }
            traverse(current)
            return console.log("DFS InOrder", data); 
        }
    }

    // Executing The Searches
    let tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    console.log("--------------------");
    console.log("Breadth-First Search");
    tree.BFS(); // [ 10, 6, 15, 3, 8, 20 ]
    console.log("--------------------");
    console.log("Depth-First Search");
    tree.DFSPreOrder(); // [ 10, 6, 3, 8, 15, 20 ]
    tree.DFSPostOrder(); // [ 3, 8, 6, 20, 15, 10 ]
    tree.DFSInOrder(); // [ 3, 6, 8, 10, 15, 20 ]
    console.log("--------------------");

// Visual of Example Binary Search Tree Used
    //       _____10_____
    //    __6__          15__
    //   3     8             20


// BFS vs DFS Notes:
    // Time complexity is the same for both
    // BFS
        // - Space complexity for a wide tree is much bigger than depth-first
        // - Space complexity for a thin/long/one-sided tree is less and faster
    // DFS
        // - Space complexity for a wide tree is less and faster
        // - Space complexity for a thin tree is much bigger than breadth-first
    // DFS variants use case
        // InOrder - returns back the data in order in a BST (lowest number value to largest value)
        // PreOrder - useful to 'export' a tree structure so that can be copied and shared


