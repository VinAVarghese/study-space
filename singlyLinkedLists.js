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
        this.length--;
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
    get(i){
        if(i < 0 || i >= this.length) return null;
        let current = this.head;
        let counter = 0; 
        while(i !== counter){
            current = current.next
            counter++;
        }
        // console.log("Get item: ", current);
        return current
    }
    set(i, newVal){
        let foundNode = this.get(i)
        if(foundNode){
            foundNode.val = newVal;
            console.log(foundNode);
            return true
        } else {
            console.log("No node at Index",false);
            return false
        }
    }
    insert(i, val){
        if(i < 0 || i > this.length) {
            return false
        } else if(i === this.length) {
            return !!this.push(val);
        } else if(i === 0){
            return !!this.unshift(val);
        } else {
            let newNode = new Node(val);
            var previous = this.get(i - 1);
            newNode.next = previous.next;
            previous.next = newNode;
            this.length++;
            return true
        }
    }
    remove(i){
        if(i < 0 || i > this.length) return undefined;
        if(i === this.length) return this.pop();
        if(i === 0) return this.shift();
        let removed = this.get(i);
        let prev = this.get(i-1);
        prev.next = removed.next;
        this.length--;
        console.log("Removed:", removed); 
        console.log("prevNode:", prev); 
        return removed;
    }
    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return next;
    }
    print(){
        var arr = [];
        var current = this.head;
        while (current){
            arr.push(current.val);
            current = current.next;
        }
        console.log("The list:", arr);
    }
}
var list = new SinglyLinkedList
list.push("First!")
list.push("Second?")
list.push(3)
list.push(false)
list.push("END")
// list.pop()
// list.shift()
// list.unshift(13)
// list.get(2)
// list.set(2, "Newest set item")
// list.insert(1, "New NODE Inserted")
// list.remove(2)
// list.reverse()
list.print()