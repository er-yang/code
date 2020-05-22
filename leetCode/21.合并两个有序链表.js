/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head1 = l1;
  let head2 = l2; 
  let preNode = null;
  let result = null;
  while(head1 || head2) {
    let temp ;
    if(!head1 || (head2 && head1.val > head2.val)){
      temp = head2;
      head2 = head2.next;
    } else{
      temp = head1;
      head1 = head1.next;
    }
    if(preNode) {
      preNode.next = temp;
    }
    preNode = temp;
    if(!result) {
      result = temp;
    }
  }
  return result;
};
// @lc code=end

