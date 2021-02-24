/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// var grayCode = function(n) {
//   let largest = Math.pow(2, n) ;
//   let result = [0];
//   let head = 1;
//   let forward = 'l';
//   for (let i = 1; i < largest; i++) {
//     const num = result[result.length - 1];
//     let temp = num ^ head;
//     if(forward === 'l') {
//       head <<= 1;
//     } else {
//       head >>= 1;
//     }
//     if(head >= (1 << n-1)) {
//       forward = 'r';
//     }
//     if(head <= 1) {
//       forward = 'l';
//     }
//     result.push(temp);
//   }
//   return result;
//   let helper = (arr, map) => {
//     if(arr.length >= largest) {
//       result = arr;
//       return true;
//     }
//     let m = n - 1;
//     while(m >= 0) {
//       let num = arr[arr.length - 1] ^ Math.pow(2, m);
//       m--;
//       if(map[num]) {
//         continue;
//       } else {
//         if(helper([...arr, num], {...map, num: true})) {
//           break;
//         }
//       }
//     }
//     return result;
//   }
//   helper([0], map);
//   return result;
// };

// 官方解法
var grayCode = function(n) {
  let res = [0];
  let head = 1;
  for (let i = 0; i < n; i++) {
      for (let j = res.length - 1; j >= 0; j--){
        res.push(head + res[j]);
      }
      head <<= 1;
  }
  return res;
}
console.log(grayCode(4));
// @lc code=end

