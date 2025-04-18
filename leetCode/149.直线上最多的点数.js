/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let maxLenght = 1
    for (let i = 0; i < points.length; i++) {
        const point1 = points[i];
        let lines = 1;
        for(let j = 0; j < points.length; j++) {
            if(j === i) {
                continue;
            }
            const point2 = points[j];
            lines = 2;
            const corner = (point2[1] - point1[1]) / (point2[0] - point1[0]);
            const isX = point2[0] === point1[0]
            for (let m = 0; m < points.length; m++) {
                if(m === i || m === j) {
                    continue;
                }
                const point3 = points[m];
                const temp = (point3[1] - point2[1]) / (point3[0] - point2[0]);
                if (temp === corner || (isX && point3[0] === point2[0])) {
                    lines++;
                }
            }
            maxLenght = Math.max(maxLenght, lines);
        }
    }
    return maxLenght;
};
// console.log(maxPoints([[0,0],[1,-1],[1,1]]));
// @lc code=end

