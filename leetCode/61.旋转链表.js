/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head || head.next === null) {
    return head;
  }
  let header = head;
  let reverse = head;
  let node = head;
  let tail = node;
  while(!!node.next) {
    node.next.pre = node;
    tail = node.next;
    node = tail;
  }
  for(let i = 0; i< k ; i ++ ) {
    tail.next = header;
    tail.pre.next = null;
    header.pre = tail;
    header = tail;
    tail = tail.pre;
  }
  return header;
};
// @lc code=end

