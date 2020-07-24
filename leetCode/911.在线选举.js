/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.persons = persons;
  this.total = [];
  for(let p of persons){
    this.total[p] = this.total[p] || 0 + 1;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let index = findIndex(this.times, 0, this.times.length - 1, t);

};
var getMaxTotal = function(arr, index) {

}
var findIndex = function(arr, start, end, target) {
  if(end - start <= 1) {
    return start;
  }
  let middle = Math.floor((start + end) / 2 );
  if(target < arr[middle + 1] && target >= arr[middle ] ) {
    return middle;
  }
  if(target > arr[middle]) {
    return findIndex(arr, middle, end, target);
  } else {
    return findIndex(arr, start, middle, target);
  }
}
// findIndex([0,5,10,15,20,25,30], 0, 6, 12);
/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end

