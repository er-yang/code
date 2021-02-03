/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  return helper(this.origin.slice(), []);
};
var helper = (nums, res) => {
  if(nums.length <= 0) {
    return res;
  }
  let length = nums.length;
  let index = Math.floor(length * Math.random());
  res.push(nums[index]);
  nums.splice(index, 1);
  return helper(nums, res);
}
// console.log(helper([1,2,3], []));
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

