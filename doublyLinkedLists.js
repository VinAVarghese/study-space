// DOUBLY LINKED LIST NOTES : 
// Insertion - constant time O(1)
// Removal - constant time O(1) (always constant unlike singly linked list)
// Searching - O(n) time (slightly optimized because it might start at the end - divide and conqure)
// Access - O(n) 

// - Working backwards/reversed manor, DLL is best
// - Better than SLL for finding nodes
// - Takes more memory than SLL

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor (){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head) return undefined;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        console.log("Poppped:", popped);
        return this
    }

    shift(){
        if(!this.head) return undefined;
        let shifted = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        console.log("shifted:", shifted);
        return this
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(i){
        if(i < 0 || i >= this.length) return null;
        let count, current;
        if(i <= (this.length / 2)){
            count = 0;
            current = this.head;
            while(count != i){
                current = current.next;
                count++;
            }
            console.log("Got Item:", current);
        } else {
            count = this.length - 1; 
            current = this.tail;
            while(count != i){
                current = current.prev;
                count--;
            }
            console.log("Got Item:", current);
        }
        return current
    }

    set(i, val){
        let nodeChanged = this.get(i);
        if(nodeChanged != null){
            nodeChanged.val = val;
        } else { 
            console.log(false);
        }
        console.log("Set item: ", nodeChanged);
        return nodeChanged
    }

    insert(i, val){
        if(i < 0 || i > this.length) return false;
        if(i === 0) return this.unshift(val);
        if (i === this.length) return this.push(val);
        let newNode = new Node(val);
        let insertHere = this.get(i);
        newNode.next = insertHere;
        newNode.prev = insertHere.prev;
        insertHere.prev.next = newNode;
        insertHere.prev = newNode;
        this.length++;
        console.log("Inserted Node: ", newNode);
        return newNode
    }

    remove(i){
        if(i < 0 || i >= this.length) return false;
        if(i === 0) return this.shift();
        if (i === this.length - 1) return this.pop();
        let removedNode = this.get(i);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        console.log("Node removed: ", removedNode);
        return removedNode
    }
}

let dList = new DoublyLinkedList();
dList.push(10);
dList.push(20);
dList.push("Thirty");
dList.push(40);
dList.push("END");
// dList.pop();
// dList.shift();
// dList.unshift("New Head Item");
// dList.get(2);
// dList.set(2, "set new val");
// dList.insert(3, "Inserted This");
dList.remove(3);
console.log("Final list:", dList);