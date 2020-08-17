/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) {
    return 0;
  }
  root.dep = 1;
  let stack =[root];
  while(stack.length > 0) {
    let node = stack.shift();
    if(node.left) {
      node.left.dep = node.dep + 1;
      stack.push(node.left);
    }
    if(node.right) {
      node.right.dep = node.dep + 1;
      stack.push(node.right);
    }
    if(!node.left && !node.right) {
      return node.dep;
    }
  }
  return 0;
};
// @lc code=end

