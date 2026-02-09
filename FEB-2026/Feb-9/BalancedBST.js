// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

function TreeNode(val, left=null, right=null) {
    this.val=val;
    this.left=left;
    this.right=right;
}
// A binary tree is balanced if for every node in the tree, the difference in height between its left and right subtrees is at most 1.

var Balanced=function(root){
    const nodes=[];
    // Step 1: Perform an in-order traversal to collect the node values in sorted order
    function inorder(node){
        if(!node){
            return ;
        }
        inorder(node.left);
        nodes.push(node.val);
        inorder(node.right)

    }
    inorder(root)
    // Step 2: Construct a balanced binary search tree from the sorted node values
    function BST(left,right){
        if(left>right) return null;
        const mid=Math.floor((left+right)/2);
        const newNode=new TreeNode(nodes[mid]);
        newNode.left=BST(left,mid-1);
        newNode.right=BST(mid+1,right);
        return newNode;
    }
    return BST(0,nodes.length-1);
}

const root=new TreeNode(1);
// root.left=new TreeNode(null);
root.right=new TreeNode(2);
// root.right.left=new TreeNode(null);
root.right.right=new TreeNode(3);
// root.right.right.left=new TreeNode(null);
root.right.right.right=new TreeNode(4);;
console.log(Balanced(root))