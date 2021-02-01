/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if(!root.val) {
    return null;
  }
  let stack = [root];
  let node;
  while(stack.length > 0) {
    node = stack.pop();
    if(node.val === val) {
      return node;
    }
    if(node.val < val) {
      if(node.right) {
        stack.push(node.right);
      } else
      return null;
    }
    if(node.val > val) {
      if(node.left) {
        stack.push(node.left);
      } else
      return null;
    }
  }
  return null;
};
// @lc code=end

