/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 // 滑动窗口
var removeNthFromEnd = function(head, n) {
  if(!head.next) {
    return head.next;
  }
  let target = end = head;
  let count = 1;
  while(end.next) {
    count++;
    if(count > n + 1) {
      target = target.next;
    }
    end = end.next;
  }
  if(count < n + 1) {
    head = head.next;
  } else {
    target.next = target.next ? target.next.next : target.next;
  }

  return head;
};
// @lc code=end

