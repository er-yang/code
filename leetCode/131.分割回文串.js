/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let arr = s.split('');
  if (!s) {
    return [[]];
  }
  if (s.length === 1) {
    return [[s]];
  }
  for (let i = 1; i <= arr.length; i++) {
    if (!helper(arr.slice(0, i))) {
      continue;
    } else {
      let branch = partition(s.substring(i));
      branch.map((item) => item.unshift(s.substring(0, i)));
      result = result.concat(branch);
      // console.log(result);
    }
  }

  return result;
};
var helper = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
// @lc code=end
