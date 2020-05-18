/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) {
    return [];
  }
  let result = [];
  let stack = [];
  stack.push(root);
  while(stack.length !== 0) {
    let length = stack.length;
    let index  = 0;
    let temp = [];
    while(index < length) {
      let node = stack.shift();
      temp.push(node.val);
      stack.push(...node.children);
      index++;
    }
    result.push(temp);
  }
  return result;
};
// @lc code=end

