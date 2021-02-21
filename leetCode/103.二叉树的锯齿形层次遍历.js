/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
  if(!root) {
    return [];
  }
  let result = [];
  let level = [root];
  let forword = false;
  while (level.length > 0) {
    let temp = [];
    let nextLevel = [];
    for (const node of level) {
      if(!forword) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }
      node.left && nextLevel.push(node.left);
      node.right &&nextLevel.push(node.right);
    }
    result.push(temp);
    level = nextLevel;
    forword = !forword;
  }
  return result;
};
// @lc code=end

