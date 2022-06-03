// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }


    insert(data) {
        // let node = new Node(data);
        // if (node.data > this.data) {
            
        //     this.right = node;
        //     console.log("right: ", this.right);
        // }else {
        //     this.left = node;
        //     console.log("left:" ,this.left);
        // }

        // const node = new Node(data);
        if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        } else if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        }
    }

    contains (data) {
        // if (data > this.data) {
        //     this.right.contains(data);
        // } else if (data < this.data) {
        //     this.left.contains(data);
        // }else if (data === this.data) {
        //     return this.data;
        // }

        if (data === this.data) {
            return this;
        }

        if (data > this.data && this.right) {
            return this.right.contains(data);
        } else if (data < this.data && this.left) {
            return this.left.contains(data);
        }


        return null;

    }
}

// const node = new Node(10);
//   node.insert(5);
//   node.insert(15);
//   node.insert(17);

//   console.log(node.left);


module.exports = Node;
