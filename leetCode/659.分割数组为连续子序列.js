/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  if(nums.length < 3) {
    return false;
}
let child = [[nums[0]]];
for(let i = 1; i < nums.length; i++) {
    let childIndex = child.length - 1;
    let flag = false;
    while(childIndex >= 0) {
      let last = child[childIndex][child[childIndex].length - 1];
        if(nums[i] - last === 1) {
            child[childIndex].push(nums[i]);
            flag = true;
            break;
        }
        childIndex--;
    }
    if(!flag) {
        child.push([nums[i]]);
    }
}
return child.findIndex(item => item.length < 3) < 0;
};

console.log(isPossible([1,2,3,4,6,7,8,9,10,11]));
// @lc code=end

