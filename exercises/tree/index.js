// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.child = new Node (data);
        this.children.push(this.child);
        // this.children.push(child);
        // child.push(this.children);
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data); 
    }

}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let nodeArray = [this.root];
        
        while(nodeArray.length) {
            // let item = nodeArray.data;
            // let itemChildren = [...nodeArray[0].children]
            // // nodeArray.push(nodeArray[0].children);
            // // fn(nodeArray.shift().data);
            // nodeArray.push(itemChildren);
            // nodeArray.shift(nodeArray[0]);
            // fn(item);
        let node = nodeArray[0];
        nodeArray.push(...node.children);
        nodeArray.shift();
        fn(node);
        }
    }

    // traverseDF(fn) {
    //     fn(root);
    // }
}

module.exports = { Tree, Node };
