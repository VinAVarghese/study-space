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
// - Breadth-first Search
    // - Working across the witdh of the tree
// - Depth-first Search
    // - Going down to the end of the branch and then back up and next
    // - Three versions (InOrder / PreOrder / PostOrder)