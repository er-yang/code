/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  if(numCourses <= 0) {
    return [];
  }
  let result = [];
  let map = {...Array(numCourses).fill(undefined)};
  let reserveMap = {};
  for(let arr of prerequisites) {
    let key = arr[0];
    let pre = arr[1];
    if(map[key]) {
      map[key].push(pre);
    } else {
      map[key] = [pre];
    }
    if(reserveMap[pre]) {
      reserveMap[pre].push(key);
    } else {
      reserveMap[pre] = [key];
    }  
  }

  while(result.length < numCourses) {
    let flag = false;
    for(let key in map) {
      if(!map[key] || map[key].length <= 0) {
        flag = true;
        result.push(key);
        delete map[key];
        reserveMap[key] && reserveMap[key].forEach(item => {
          map[item] = map[item].filter(k => k + '' !== key);
        });
      }
    }
    if(!flag) {
      return [];
    }
  }
  return result;
};

// @lc code=end

