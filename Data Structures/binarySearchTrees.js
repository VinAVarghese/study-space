// BINARY TREE NOTES:
// - Binary trees can only have AT MOST two children

// BINARY SEARCH TREE NOTES:
// - Can only have AT MOST two children
// - They are sorted in a specific order
    // - stores data that can be compared by sorting them
    // - example sorting rule: nodes to the left are less than the parent and nodes to the right are greater or equal to the parent
// - use case/advantage > searching and inserting data is very quick and easy
// BST BIG O: 
// - Insertion - O(log n) (NOT guaranteed if the tree is weighted to one side)
// - Searching - O(log n) (NOT guaranteed if the tree is weighted to one side)

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

    find(val){
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
           if(val < current.val){
               current = current.left;
           } else if(val > current.val){
            current = current.right;
           } else {
               found = true
           }
        }
        if(!found) return console.log("Node not found.");
        return console.log("Node Found: ", current);
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// tree.find(5);

console.log("BST: ", tree);