/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head;
  let parentNode = null;
  let map = new Map();
  while(node !== null) {
    if(!map.has(node.val)) {
      map.set(node.val, node);
      if(parentNode) {
        parentNode.next = node;
      }
      parentNode = node;
    }
    node = node.next;
  }
  if(parentNode) {
    parentNode.next = null;
  }
  return head;
};
// @lc code=end

