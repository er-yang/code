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
/**
 *  [1,2,3,3,4,4,5,5]
 *  [[1 2 3 4 5]
 *  [3 4 5]]
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

// var isPossible = function (nums) {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const item = nums[i];
//     if (map[item - 1]) {
//       if (map[item - 1].count === 1) {
//         delete map[item - 1];
//       }
//       map[item - 1].count =  map[item - 1].count - 1;
//     }
//     map[item] = map[item] ? map[item] + 1 : 1;
//   }
//   for (const key of Object.keys(map)) {
//     if(map[key] < 3) {
//       return false;
//     }
//   }
//   return true;
// };
console.log(isPossible([1, 2, 3, 4, 6, 7, 8, 9, 10, 11]));
// @lc code=end
