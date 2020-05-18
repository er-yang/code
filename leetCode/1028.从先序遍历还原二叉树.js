/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
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
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  if(!S) {
    return null;
  }
  let head = null;
  let mix = S.split(/(\d+)/);
  let stack = [];
  let depth = 0;
  for(let str of mix) {
    if(str === '') continue;
    let val = parseInt(str);
    if(val) {
      let node = new TreeNode(val);
      let parentNode = stack[stack.length - 1];
      if(parentNode && parentNode.left) {
          parentNode.right = node;
        }else if(parentNode){
          parentNode.left = node;
      }
      stack.push(node);
    } else {
      let newDepth = getCountOfSigle(str, '-');
      if(newDepth <= depth) {
        stack = stack.slice(0, stack.length - depth + newDepth - 1);
      }
      depth = newDepth;
    }
  }
  function getCountOfSigle(s, opt) {
    let reg = new RegExp(opt, 'g');
    return s.match(reg) ? s.match(reg).length : 0;
  }
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  head = stack[0];
  return head;
};

// recoverFromPreorder('1-2--3--4-5--6--7');
// @lc code=end

