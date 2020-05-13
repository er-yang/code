/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let mapA = {};
    let mapB = {};
    let nextA = headA;
    let nextB = headB;
    while(nextA || nextB) {
      if(nextA) {
        if(mapB[nextA.val] !== undefined && nextA === mapB[nextA.val]) {
          return nextA;
        } 
        mapA[nextA.val] = nextA;
        nextA = nextA.next;
      }
      if(nextB) {
        if(mapA[nextB.val] !== undefined && nextB === mapA[nextB.val]) {
          return nextB;
        } 
        mapB[nextB.val] = nextB;
        nextB = nextB.next;
      }
    }
};
// @lc code=end

