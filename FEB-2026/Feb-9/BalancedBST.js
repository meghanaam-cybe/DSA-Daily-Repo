function TreeNode(val, left=null, right=null) {
    this.val=val;
    this.left=left;
    this.right=right;
}

var Balanced=function(root){
    const nodes=[];
    function inorder(node){
        if(!node){
            return ;
        }
        inorder(node.left);
        nodes.push(node.val);
        inorder(node.right)

    }
    inorder(root)
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