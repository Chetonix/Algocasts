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
        while (nodeRef) {
            count++;
            nodeRef = nodeRef.next;
        }
        return count;
    }

    getLast() {
        let nodeRef = this.head;
        let prevNodeRef = null;
        while (nodeRef) {
            prevNodeRef = nodeRef;
            nodeRef = nodeRef.next;
        }
        return prevNodeRef;
    }

    getFirst() {
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
        while (nodeRef.next) {
            prevNodeRef = nodeRef;
            nodeRef = nodeRef.next;
        }
        // prevNodeRef.next = null;
        prevNodeRef.next = null;


    }

    insertLast(data) {

        let nodeRef = this.head;

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        while (nodeRef.next) {
            nodeRef = nodeRef.next;
        }

        nodeRef.next = new Node(data);
    }

    getAt(index) {
        let nodeRef = this.head;
        for (let i = 0; i <= index - 1; i++) {
            if (nodeRef === null) {
                return null;
            }
            nodeRef = nodeRef.next;
        }
        return nodeRef;
    }

    removeAt(index) {
        // if (this.getAt(index+2) === null) {
        //     return;
        // }
        if (!this.getAt(index)) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        this.getAt(index - 1).next = this.getAt(index + 1);
    }

    insertAt(data, index) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        if (this.getAt(index) === null) {
            this.getLast().next = new Node(data);
            return;
        }

        if (this.size() === index) {
            this.getLast().next = new Node(data);
            return;
        }

        const node = this.getAt(index);
        this.getAt(index - 1).next = new Node(data);
        this.getAt(index).next = node;
    }
}



module.exports = { Node, LinkedList };
