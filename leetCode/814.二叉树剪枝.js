/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root || (root.val === 0 && root.left === null && root.right === null)) {
    return null;
  }
  let left = pruneTree(root.left);
  let right = pruneTree(root.right);
  if (root.val === 0 && !left && !right) {
    return null;
  } else {
    root.left = left;
    root.right = right;
    return root;
  }
};
// @lc code=end
