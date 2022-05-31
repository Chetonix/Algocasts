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

    getLast () {
        let nodeRef = this.head;
        let prevNodeRef = null;
        while(nodeRef) {
            prevNodeRef = nodeRef;
            nodeRef = nodeRef.next;
        }
        return prevNodeRef;
    }

    getFirst () {
        return this.head;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {

        if (!this.head) {
            return;
        }
        this.head = this.head.next;

    }

    removeLast() {

        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let nodeRef = this.head;
        let prevNodeRef = null;
        while(nodeRef.next) {
            prevNodeRef = nodeRef;
            nodeRef = nodeRef.next;
        }
        // prevNodeRef.next = null;
        prevNodeRef.next = null;
        
        
    }
}

module.exports = { Node, LinkedList };
