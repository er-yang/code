/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1 枚举 O(n3)
// var triangleNumber = function(nums) {
//   let count = 0;
//   for(let a = 0; a < nums.length - 2; a++) {
//     let numA = nums[a];
//     for(let b = a + 1; b < nums.length - 1; b++) {
//       let numB = nums[b];
//       for(let c = b + 1; c < nums.length; c++) {
//         let numC = nums[c];
//         if(isTriangle(numA, numB, numC)) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };
// var isTriangle = (a, b, c) => {
//   let sum = a + b + c;
//   let max = Math.max(a, b, c);
//   return sum - max > max;
// }

// 方法二 排序加双指针 时间复杂度 O(n2)
var triangleNumber = function(nums) {
  let count = 0;
  nums.sort((a ,b) => a - b);
  for(let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for(let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while(k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      count += k - j - 1;
    }
  }
  return count;
};


// @lc code=end

