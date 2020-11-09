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
        if(this.head === null){
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
        if(this.head === null) return undefined;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
        }
        this.length--;
        console.log("Poppped:", popped);
    }
}

let dList = new DoublyLinkedList();
dList.push(10);
dList.push(20);
dList.push("Thirty");
// dList.pop();
console.log("Final DoublyLinkedList:", dList);