// 1022. Sum of Root To Leaf Binary Numbers


// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

 

// Example 1:


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22



// Tree Node class
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Build Tree from Level Order Array
function buildTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        // Left child
        if (arr[i] !== null && i < arr.length) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        // Right child
        if (arr[i] !== null && i < arr.length) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Main Logic: Sum Root to Leaf
function sumRootToLeaf(root) {
    function dfs(node, current) {
        if (!node) return 0;

        current = current * 2 + node.val;

        if (!node.left && !node.right) {
            return current;
        }

        return dfs(node.left, current) + dfs(node.right, current);
    }

    return dfs(root, 0);
}


// --------------------
// Taking Input
// --------------------

// Example Input
let input = [1,0,1,0,1,0,1];

// Build Tree
let root = buildTree(input);

// Get Result
let result = sumRootToLeaf(root);

// Output
console.log("Sum of Root to Leaf Binary Numbers:", result);