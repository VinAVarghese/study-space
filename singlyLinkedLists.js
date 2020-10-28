// SINGLY LINKED LIST NOTES : 
// - Data structure that stores ordered data. 
// - Each element is called a "node" and each one points to the next one.
// - "Head" is the beginning and the "tail" is the end and the "length" is length.
// - "Singly" mean nodes are only connected forward.
    
// Compared to an array...
    // - Unlike an array, a SLL has no indices and just points to the next element.
    // - Random access is not allowed on SLL
    // - No re-indexing when insertion or deletion to a SLL


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        // console.log(this); 
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        console.log("Length: ", this.length);
        console.log(current.val);
        while (current.next){
            newTail = current;
            current = current.next
            console.log(current.val);
        }
        this.tail = newTail
        console.log("Popped: ", this.tail.next);
        this.tail.next = null;
        console.log("New Tail: ", this.tail);
        this.length--;
        console.log("Length: ", this.length);
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift(){
        if(!this.head) return undefined;
        var shiftedThisHead = this.head;
        this.head = shiftedThisHead.next;
        this.length--;
        console.log("Shifted off: ",shiftedThisHead);
        console.log("New Head: ",this.head);
        if(this.length === 0){
            this.tail = null;
        }
    }
    unshift(val){
        let newHead = new Node(val)
        if(!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else{
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
    }
}
var list = new SinglyLinkedList
list.push("Hello!")
list.push("How are you?")
list.push("Goodbye")
// list.pop()
// list.shift()
list.unshift(13)
console.log("The list now: ", list);