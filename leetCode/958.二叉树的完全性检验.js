/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) {
    return false;
  }
  let left, right;
  let firstLeaf = false;
  let qunue = [root];
  while (qunue.length > 0) {
    let node = qunue.shift();
    if (!node) {
      return qunue.length <= 0;
    }
    left = node.left;
    right = node.right;
    if (left || right) {
      if (firstLeaf) {
        return false;
      }
      qunue.push(left);
      qunue.push(right);
    } else {
      firstLeaf = true;
    }
  }
  return true;
};
// @lc code=end
