/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if(!root) {
    return [];
  }
  let result = [];
  let level = [root];
  while (level.length > 0) {
    let temp = [];
    let nextLevel = [];
    for (const node of level) {
      temp.push(node.val);
      node.left &&nextLevel.push(node.left);
      node.right &&nextLevel.push(node.right);
    }
    result.push(temp);
    level = nextLevel;
  }
  return result;
};
// @lc code=end

