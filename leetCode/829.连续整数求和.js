/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  // let count = 1;
  // for(let i = Math.ceil(N / 2); i > 1; i--) {
  //   let j = i - 1;
  //   if(i+j === N) {
  //       count ++;
  //       continue;
  //     }
  //     if(i + j > N) {
  //       continue;
  //     } else if(i + j < N){
  //       let total = i + j;
  //       let next = j - 1;
  //       while(total + next < N && next > 0) {
  //         total += next;
  //         next --;
  //       }
  //       if(total + next === N) {
  //         count++;
  //       } else {
  //         i = i - total + next - N + 1;
  //         continue;
  //       }
  //     }
  // }
  // return count;

  let count = 1;
  let map = {};
  let sumMap = {};
  let midle = Math.ceil(N / 2);
  for (let i =1; i<= midle; i++) {
    let sum =  i * ( i + 1) / 2;
    map[sum] = i;
    sumMap[i] = sum;
  }
  for(let i = midle; i > 1; i--) { 
    let sum = sumMap[i];
    let diff = sum - N;
    if(diff === 0 ) {
      count++;
      continue;
    }
    if(diff > 0 && map[diff]) {
      count++;
      // i = map[diff];
      continue
    }
    if(diff < 0) {
      break;
    }
  }
  return count;
  };
console.log('--,', consecutiveNumbersSum(649869));
// @lc code=end

