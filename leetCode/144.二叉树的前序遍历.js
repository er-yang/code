/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = [];
  let result = [];
  if(!root){
    return result;
  }
  stack.push(root);
  while(stack.length > 0){
    let node = stack.pop();
    result.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
};
// @lc code=end

