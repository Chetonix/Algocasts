// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.myQueue1 = new Stack;
        this.myQueue2 = new Stack;

    }

    add(record) {
        this.myQueue1.push(record);
    }

    remove() {
        while (this.myQueue1.peek()) {
            this.myQueue2.push(this.myQueue1.pop());
        }

        const record = this.myQueue2.pop();

        while(this.myQueue2.peek()) {
            this.myQueue1.push(this.myQueue2.pop());
        }
        return record;

    }

    peek() {
        while(this.myQueue1.peek()) {
            this.myQueue2.push(this.myQueue1.pop());
        }

        const record = this.myQueue2.peek();

        while(this.myQueue2.peek()) {
            this.myQueue1.push(this.myQueue2.pop());
        }
        
        return record;
    }
}

module.exports = Queue;
