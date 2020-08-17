/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let helper = (root) => {
    if (!root) {
      return 0;
    }
    let leftHeight = helper(root.left);
    let rightHeight = helper(root.right);
    if(leftHeight < 0 || rightHeight < 0 || Math.abs(rightHeight - leftHeight) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  return helper(root) > 0 ;
};

//  function TreeNode(val) {
//       this.val = val;
//        this.left = this.right = null;
//  }
//  [1,2,2,3,null,null,3,4,null,null,4]
//        1
//       2 2
//      3   3
 //    4   4
 let midlle = new TreeNode(20);
 midlle.left = new TreeNode(15);
 midlle.right = new TreeNode(7);
 let root = new TreeNode(3);
 root.left = new TreeNode(9);
 root.right = midlle;
 console.log('---', isBalanced(root));