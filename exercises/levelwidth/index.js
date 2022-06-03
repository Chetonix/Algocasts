// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2

const Node = require('./node');

function levelWidth(root) {
    let baseArray = [root];
    let childrenArray = baseArray[0].children;
    let counts = [1];

    
    while (childrenArray.length) {
        
        baseArray = [...childrenArray];
        // console.log("baseArray", baseArray);
        childrenArray = [];
        counts.push(baseArray.length);
        while(baseArray.length) {
            let removedNode = baseArray.pop();
            // console.log("removedNode:",removedNode);
            // console.log("removedNode children: ", removedNode.children);
            
                if (removedNode.children === undefined) {
                    break;
                }

                if (removedNode.children.length) {
                    childrenArray.push(...removedNode.children);
                }
            // console.log("baseArray: ", baseArray);
            // console.log("childrenArray: ", childrenArray);
            
        }
        
        console.log("counts: ", counts);
    }
    return counts;

}


module.exports = levelWidth;
