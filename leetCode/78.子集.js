/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // let result = [];
  // nums.sort((a, b) => a - b);
  // let pick = (source, count, pre) => {
  //   if(count <= 0) {
  //     return [];
  //   }
  //   let arr = [];
  //   for (let i = 0; i < source.length; i++) {
  //     const element = source[i];
  //     if(element === source[i-1]) {
  //       continue;
  //     }
  //     let temp = pre.slice()
  //     temp.push(element);
  //     arr.concat()
  //   }
  //   return arr;
  // }

  let result = [];
  var find = (index, pre) => {
    if(index >= nums.length) {
      result.push(pre);
      return;
    }
    let include = pre.slice();
    include.push(nums[index]);
    let next = index + 1;
    find(next, include)
    find(next, pre);
  }
  find(0, []);
  return result;
};
// console.log(JSON.stringify(subsets([0])));
// @lc code=end

