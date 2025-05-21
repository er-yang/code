/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 15 16 18 20
// 100 2, 010 3 ,200, 4, 110,6, 300, 8, 020, 9, 101 10
// fn = 2^x*3^y*5^z
// fn+1 = fn / 2 * 3 fn /3 * 2 * 2  fn / 3 * 5 fn/4 * 5 fn / 5 * 2 * 3 fn/6 * 5 fn / 9 * 2 *5
var nthUglyNumber = function(n) {
    if(n < 6) {
        return n;
    }
    const fn1 = nthUglyNumber(n - 1);
    const arr = [fn1 / 2 * 3, fn1 / 3 * 2 * 2, fn1 / 3 * 5, 
        fn1 / 4 * 5, fn1 / 5 * 2 * 3, fn1 / 9 * 2 * 5
    ];
    let min
    for (let i = 0; i < arr.length; i++) {
        min = min || arr[i];
        if (Number.isInteger(arr[i])) {
            min = Math.min(arr[i], min)
        }
        
    }
    return min;
};
console.log('--- nthUglyNumber ', nthUglyNumber(7))
// @lc code=end

