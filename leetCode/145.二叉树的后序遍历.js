/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

//  // 递归实现
var postorderTraversal = function(root) {
  if(!root) {
    return [];
  }
  let result = [];
  if(root.left) {
    result = result.concat(postorderTraversal(root.left));
  }
  if(root.right) {
    result = result.concat(postorderTraversal(root.right))
  }

  result.push(root.val);

  return result;
};
// 迭代实现
var postorderTraversal = function(root) {
  let result = [];
  let stack = [];
  root && stack.push(root);
  while (stack.length > 0 ) {
    let ele = stack[stack.length - 1];
    if((!ele.left || ele.left.visited) && (!ele.right || ele.right.visited)) {
      ele.visited = true;
      result.push(ele.val);
      stack.pop();
    }
    if(ele.right && !ele.right.visited) {
      stack.push(ele.right);
    }
    if(ele.left && !ele.left.visited) {
      stack.push(ele.left);
    }

  }
  return result;
}
// @lc code=end

