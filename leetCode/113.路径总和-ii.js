/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let stack = [];
  if(!root) {
      return false;
  }
  root.sum = sum;
  root.path = root.val + '';
  let result = [];
  stack.push(root);
  while(stack.length > 0) {
      let node = stack.pop();
      if(!node.left && !node.right && node.sum - node.val === 0) {
        result.push(node.path.split(','));
      }
      let temp = node.sum - node.val;
      if(node.right) {
          node.right.sum = temp;
          node.right.path = node.path + ',' + node.right.val;
          stack.push(node.right);
      }
      if(node.left) {
          node.left.sum = temp;
          node.right.path = node.path + ',' + node.right.val;
          stack.push(node.left);
      }

  }
  return result;
};
// @lc code=end

