/*
 * @lc app=leetcode.cn id=731 lang=javascript
 *
 * [731] 我的日程安排表 II
 */

// @lc code=start

var MyCalendarTwo = function() {
  this.one = [];
  this.double = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  for(let books of this.double) {
    if(books.start < end && start < books.end ) {
      return false;
    }
  }
  for(let books of this.one) {
    if(books.start < end && start < books.end ) {
      this.double.push({start: Math.max(books.start, start), end: Math.min(books.end, end)});
    }
  }
  this.one.push({start, end});
  return true;
};

// let temp = new MyCalendarTwo();
// temp.book();
// temp.book(24,40); // returns true
// temp.book(43, 50); // returns true
// temp.book(27, 43); // returns true
// temp.book(5, 21); // returns false
// temp.book(30, 40); // returns true
// temp.book(14, 29);
// // [[],[24,40],[43,50],[27,43],[5,21],[30,40], [14,29]
/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

