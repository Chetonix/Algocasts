// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, n = null) {
        this.data = data;
        this.next = n;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let nodeRef = this.head;
        let count = 0;
        while(nodeRef) {
            count++;
            nodeRef = nodeRef.next;
        }
        return count;
    }
}

module.exports = { Node, LinkedList };
