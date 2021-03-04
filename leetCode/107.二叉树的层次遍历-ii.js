/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = [];
  let level = [];
  root && level.push(root);
  while (level.length > 0) {
    let next = [];
    let currentVal = []
    for(let item of level) {
      currentVal.push(item.val);
      item.left && next.push(item.left);
      item.right && next.push(item.right);
    }
    result.unshift(currentVal);
    level = next;
  }
  return result;
};
// @lc code=end

