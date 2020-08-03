/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // if(num1 === '0' || num2 === '0') {
  //   return '0';
  // }
  // let pre = 0;
  // let result = [];
  // let map = {};
  // for(let i1=0; i1< num1.length; i1++) {
  //   let n1 = parseInt(num1.charAt(i1));

  //   let i2 = num2.length -1;
  //   let mul = '';
  //   pre = 0;
  //   if(map[n1]) {
  //     result.push(map[n1]);
  //     continue;
  //   }
  //   while(i2 >= 0) {
  //     let n2 = parseFloat(num2.charAt(i2));
  //     mul = mul + (n1 * n2  + pre) % 10 ;
  //     pre = Math.floor((n1 * n2 + pre) / 10);
  //     i2--;
  //   }
  //   if(pre > 0) {
  //     mul =  mul + pre;
  //   }
  //   map[n1] = mul;
  //   result.push(mul);
  // }

  // let re = result.reduce((acc, cur, index) => {
  //   let j = 0;
  //   acc = '0' + acc;
  //   let pre = 0;
  //   let res = '';
  //   while(j < acc.length && j < cur.length) {
  //     let sum = parseInt(acc.charAt(j)) + parseInt(cur.charAt(j));
  //     res += (sum  + pre) % 10;
  //     pre = Math.floor((sum  + pre)/ 10);
  //     j++;
  //   }
  //   let preStr = '';
  //   while(pre > 0 && (j <acc.length || j < cur.length)) {
  //     let sum = pre + parseInt(acc.charAt(j) || cur.charAt(j));
  //     pre = Math.floor(sum/ 10);
  //     preStr += (sum) %10
  //     j++;
  //   }
  //   if(pre > 0) {
  //     preStr += pre;
  //   }
  //   res +=  preStr + acc.slice(j) || cur.slice(j);
  //   return res;
  // }, '')
  // return re.split("").reverse().join("");

  // from LeetCode more efficiency
  let len1=num1.length,len2=num2.length
  let ans=new Array(len1+len2).fill(0)
  if(num1=='0'||num2==='0') return '0'
  for(let i=len1-1;i>=0;i--){ 
      for(let j=len2-1;j>=0;j--){
          let sum=ans[i+j+1]+ +num1[i] * +num2[j]
          ans[i+j+1]=sum%10
          ans[i+j]+=(sum/10) |0
        }
  }
    while(ans[0]===0) ans.shift()
  
    return ans.join('')
};
// @lc code=end

