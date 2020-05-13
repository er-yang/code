/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function(root) {
  let result = [];
  let qunee = [root];
  let pleft = root.left;
  let pright = root.right;
  while(pleft) {
    let node = qunee.pop();
    
    result.push(pright.val || '');
    result.unshift(pleft.val || '');
    pleft = pleft.val;
  }
  while(pright){
    
  }
};
// @lc code=end

