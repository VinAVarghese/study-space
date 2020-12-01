// Microsoft

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    while(lists.length > 1){
        let a = lists.shift()
        let b = lists.shift()
        let mergedAB = mergeList(a,b);
        lists.push(mergedAB)
    }

    return lists[0]
};

// Helper Function
var merge = (a,b) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while (a !== null && b !== null){
        if (a.val < b.val){
            current.next = a
            a = a.next
        } else {
            current.next = b;
            b = b.next;
        }
        current = current.next
    }
    current.next = a || b;

    return dummy.next
}